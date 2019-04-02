import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { UpdateMyProfileMutationArgs } from "../../../types/graph";
import User from "../../../entities/User";

const resolvers: Resolvers = {
    Mutation: {
        UpdateMyProfile: privateResolver(async (_, args: UpdateMyProfileMutationArgs, { req }) => {
                const user: User = req.user;
                const notNull: any = {};
                Object.keys(args).forEach(key => {
                    if(args[key] !== null){
                        notNull[key] = args[key];
                    }
                })
                if (notNull.password !== null) { // 👈🏻 Change from args to notNull
                    user.password = notNull.password; // 👈🏻 Same here
                    user.save();
                    delete notNull.password; // <--  ⚠️⚠️⚠️ Delete password  from notNull or is going to be saved again without encoding ⚠️⚠️⚠️
                }
                try {
                    await User.update({ id: user.id }, { ...notNull });
                    return {
                        ok: true,
                        error: null
                    }
                } catch (error) {
                    return {
                        ok: false,
                        error: error.message
                    }
                }
            })
    }
}

export default resolvers;