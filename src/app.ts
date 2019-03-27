import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";
import decodeJWT from "./utils/decodeJWT";
import { NextFunction, Response } from "express";

class App {
    public app: GraphQLServer;
    constructor() {
        this.app = new GraphQLServer({
            schema,
            // 모든 resolver로 이동
            context: req => {
                return {
                    req: req.request
                }
            }
        });
        this.middlewares();
    }
    // 미들웨어 사용 설정
    private middlewares = (): void => {
        this.app.express.use(cors());
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet());
        this.app.express.use(this.jwt);
    };

    private jwt = async (req, res : Response, next : NextFunction) : Promise<void> => {
        const token = req.get("X-JWT");
        if(token){
            const user = await decodeJWT(token);
            //console.log(user)
            if(user){
                req.user = user
            }else{
                req.user = undefined
            }
        }
        next()
    }
}

export default new App().app;