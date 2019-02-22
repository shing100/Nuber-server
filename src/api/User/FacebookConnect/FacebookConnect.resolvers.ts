import { Resolvers } from '../../../types/resolvers';
import { FacebookConnectMutationArgs, FacebookConnectResponse } from '../../../types/graph';
import User from '../../../entities/User';


const resolvers: Resolvers = {
  Mutation: {
    FacebookConnect: async (
      _,
      args: FacebookConnectMutationArgs
    ): Promise<FacebookConnectResponse> => {
      const { fbId } = args;
      try {
        // 페이스북 로그인
        const existingUser = await User.findOne({ fbId });
        if (existingUser) {
          return {
            ok: true,
            error: null,
            token: "Comming soon aleardy"
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }

      try {
        // 페이스북 아이디가 없을 경우 생성
        await User.create({
          ...args,
          profilePhoto: `http://graph.facebook.com/${fbId}/picture?type=square`
        }).save();
        return {
            ok: true,
            error: null,
            token: "Comming soon created"
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;