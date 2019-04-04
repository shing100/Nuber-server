import { Resolvers } from "src/types/resolvers";
import privateResolver from "src/utils/privateResolver";
import User from "src/entities/User";
import { GetNearbyRidesResponse } from "src/types/graph";
import { getRepository, Between } from "typeorm";
import Ride from "src/entities/Ride";


const resolvers: Resolvers = {
    Query: {
        GetNearbyRides: privateResolver( async (_, __, {req}): Promise<GetNearbyRidesResponse> => {
            const user:User = req.user;
            if(user.isDriving){
                const { lastLat, lastLng } = user;
                try {
                    const rides = await getRepository(Ride).find({
                        status: "REQUESTING",
                        picUpLat: Between(lastLat - 0.05, lastLat + 0.05),
                        picUpLng: Between(lastLng - 0.05, lastLng + 0.05)
                    })
                    return {
                        ok: true,
                        error: null,
                        rides
                    }
                } catch (error) {
                    return {
                        ok: false,
                        error: error.message,
                        rides: null
                    }
                }
            }else {
                return {
                    ok: false,
                    error: "you are not a driver",
                    rides: null
                }
            }
        })
    }
}

export default resolvers