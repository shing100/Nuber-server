import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import { DeletePlaceResponse, DeletePlaceMutationArgs } from "../../../types/graph";
import Place from "../../../entities/Place";


const resolvers: Resolvers = {
    Mutation: {
        DeletePlace: privateResolver(async(_, args:DeletePlaceMutationArgs, {req}): Promise<DeletePlaceResponse> => {
            const user: User = req.user;   
            try{
                const place = await Place.findOne({id: args.placeId});
                if(place){
                    if(place.userId === user.id){
                        place.remove()
                        return {
                            ok: true,
                            error: null
                        }
                    }else {
                        return {
                            ok: false,
                            error: "인증필요"
                        }
                    }
                } else {
                    return {
                        ok: false,
                        error: "place not found"
                    }
                }
            }catch (error) {
                return {
                    ok: false,
                    error: error.massage
                }
            }
        })
    }
}

export default resolvers;