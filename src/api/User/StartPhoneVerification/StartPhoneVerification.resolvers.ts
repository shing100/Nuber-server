import Verification from "../../../entities/Verification";
import { StartPhoneVerificationMutationArgs, StartPhoneVerificationResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
    Mutation: {
        StartPhoneVerification: async (
            _,
            args: StartPhoneVerificationMutationArgs
        ): Promise<StartPhoneVerificationResponse> => {
            const { phoneNumber } = args;
            try {
                const existingVerification = await Verification.findOne({
                    payload: phoneNumber
                });

                // undefind 가 되는것을 막아줌
                if (existingVerification) {
                    existingVerification.remove();
                }
                const newVerification = await Verification.create({
                    payload: phoneNumber,
                    target: "PHONE"
                }).save();

                //to do: 메세지 보내기

            } catch (error) {
                return {
                    ok: false,
                    error: error.message
                };
            }
        }
    }
};

export default resolvers;