import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

// 타입 모든 파일 경로 설정
const allTypes: any = fileLoader(
    path.join(__dirname, "./api/**/*.graphql")
);

// resolvers 모든 파일 경로 설정
const allResolvers: any = fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*")
);

// Type, Resolver 합치기
const mergedTypes: any = mergeTypes(allTypes);
const mergedResolvers: any = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
});

export default schema;