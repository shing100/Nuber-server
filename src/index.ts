import dotenv from "dotenv";
dotenv.config();

import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import connectionOptions from "./ormConfig";
import decodeJWT from "./utils/decodeJWT";


// 서버 설정 .env 및 graphql endpoint 설정
const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";
const SUBSCRIPTION_ENDPOINT: string = "/subscription";

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT,
    subscriptions: {
        path: SUBSCRIPTION_ENDPOINT,
        onConnect: async connectionParams => {
            //console.log(connectionParams)
            // webSocket 을 위한 JWT 인증
            const token = connectionParams['X-JWT']
            if(token){
                const user = await decodeJWT(token)
                if(user) {
                    return {
                        currentUser: user
                    }
                }
            }   
            throw new Error("No JWT. Can't subscribe")
        }
    }
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

// connection
createConnection(connectionOptions).then(() => {
    app.start(appOptions, handleAppStart);
}).catch(error => console.log(error));
