import Verification from "src/entities/Verification";
import User from "../../../entities/User";
import { CompleteEmailVerificationMutationArgs, CompleteEmailVerificationResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
    Mutation: {
        CompleteEmailVerification: privateResolver( async(_, args: CompleteEmailVerificationMutationArgs, { req }) : Promise<CompleteEmailVerificationResponse> => {
            const user:User = req.user;
            const { key } = args;
            if(user.email) {
                try {
                    const verification = await Verification.findOne({
                        key, 
                        payload: user.email
                    });
                    if(verification) {
                        user.verifiedEmail = true;
                        user.save()
                        return {
                            ok: true,
                            error: null
                        }
                    }else {
                        return {
                            ok: false,
                            error: "이메일 인증을 하지 못함"
                        }
                    }
                } catch (error) {
                    return {
                        ok: false,
                        error: error.message
                    }
                }
            } else {
                return {
                    ok: false,
                    error: "이메일 인증 실패"
                }
            }
        })
    }
}

export default resolvers;