import { withFilter } from "graphql-yoga";
import User from "../../../entities/User";

const resolvers = {
    Subscription: {
        RideStatusSubscription: {
            subscribe: withFilter(
                (_, __, { pubSub }) => pubSub.asyncIterator("rideUpdate"),
                (payload, _, { context }) => {
                    //console.log(`this is coming from the ReportMovement Resolver`, payload);
                    //console.log(`Listening`,context);
                    const user: User = context.currentUser;
                    const { RideStatusSubscription: { driverId, passengerId } } = payload;
                    return user.id === driverId || user.id === passengerId;
                }
            )
        }
    }
}

export default resolvers