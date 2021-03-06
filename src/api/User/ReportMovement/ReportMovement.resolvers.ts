import User from "../../../entities/User";
import { ReportMovementMutationArgs, ReportMovementResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import cleanNullArgs from "../../../utils/cleanNullArgs";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
    Mutation: {
        ReportMovement: privateResolver( async(_, args: ReportMovementMutationArgs, { req, pubSub }): Promise<ReportMovementResponse> => {
            const user:User = req.user;
            const notNull = cleanNullArgs(args);
            try {
                await User.update({id: user.id}, {...notNull})
                // 위치를 업데이트하고 publish
                const updatedUser = await User.findOne({id: user.id})
                // payload 에는 subscription 과 똑같은 이름이 있어야함
                pubSub.publish("driverUpdate", { DriversSubscription: updatedUser});
                return {
                    ok: true,
                    error: null
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.massage
                }
            }
        })
    }
}

export default resolvers;