import { Resolvers } from "../../../types/resolvers";
import { EmailSignUpResponse, EmailSignUpMutationArgs } from "../../../types/graph";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";
import Verification from "../../../entities/Verification";
import { sendVerificationEmail } from "../../../utils/sendEmail";

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async(_, args: EmailSignUpMutationArgs): Promise<EmailSignUpResponse> => {
            const { email } = args;
            try {
                const existingUser = await User.findOne({ email });
                if(existingUser) {
                    return {
                        ok: false,
                        error: "you should log in instead",
                        token: null
                    };
                } else {
                    // 폰 인증
                    const phoneVerification = await Verification.findOne({
                        payload: args.phoneNumber,
                        verified: true
                    })
                    if(phoneVerification){
                        const newUser = await User.create({ ...args }).save();

                        if (newUser.email) {
                            const emailVerification = await Verification.create({
                                payload: newUser.email,
                                target: "EMAIL"
                            }).save();
                            await sendVerificationEmail(
                                newUser.fullName,
                                emailVerification.key
                            )
                        }

                        const token = createJWT(newUser.id)
                        return {
                            ok: true,
                            error: null,
                            token
                        }
                    }else {
                        return {
                            ok: false,
                            error: "폰 인증을 안받았음",
                            token: null
                        }
                    }
                }
            } catch (error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                }
            }
        }
    }
}

export default resolvers;