import { ConnectionOptions } from "typeorm";

// 커넥션 옵션 설정
// postgrs DB
const connectionOptions: ConnectionOptions = {
    type: "postgres",
    database: "nuber",
    synchronize: true,
    logging: true,
    entities: [
        "entities/**/*.*"
    ],
    host: process.env.DB_ENDPOINT,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}

export default connectionOptions;