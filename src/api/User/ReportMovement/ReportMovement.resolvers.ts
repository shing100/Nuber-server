import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { ReportMovementResponse, ReportMovementMutationArgs } from "../../../types/graph";
import User from "../../../entities/User";
import cleanNullArgs from "../../../utils/cleanNullArgs";

const resolvers: Resolvers = {
    Mutation: {
        ReportMovementResponse: privateResolver( async(_, args: ReportMovementMutationArgs, { req }): Promise<ReportMovementResponse> => {
            const user:User = req.user;
            const notNull = cleanNullArgs(args);
            try {
                await User.update({id: user.id}, {...notNull})
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