import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
    Query: {
        GetMyProfile: async (_,_, {req}) => {
            const { user } = req
            return {
                ok: true,
                error: null,
                user
            }
        }
    }
}