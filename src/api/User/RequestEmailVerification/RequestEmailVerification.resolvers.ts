import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import Verification from "../../../entities/Verification";
import { sendVerificationEmail } from "../../../utils/sendEmail";
import { RequestEmailVerificationResponse } from "../../../types/graph";

const resolvers: Resolvers = {
    Mutation: {
        RequestEmailVerification: privateResolver( async(_, __, { req}): Promise<RequestEmailVerificationResponse> => {
            const user:User = req.user;
            // 인증 지우기
            if(user.email) {
                try{
                    const oldVerification = await Verification.findOne({ payload: user.email })
                    if (oldVerification) {
                        oldVerification.remove();
                    }
                    const newVerification = await Verification.create({
                        payload: user.email,
                        target: "EMAIL"
                    }).save()
                    await sendVerificationEmail(user.fullName, newVerification.key);
                    return {
                        ok: true,
                        error: null
                    }
                } catch(error) {
                    return {
                        ok: false,
                        error: error.message
                    }
                }
            } else {
                return {
                    ok: false,
                    error: "User 이메일이 없습니다."
                }
            }
        })
    }
};

export default resolvers