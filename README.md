# Nuber-server
TypeScript, graphql 를 이용하여 우버 서버 클론하기

## 초기 세팅
- yarn add typescript ts-node nodemon --dev
- yarn add tslint-config-prettier --dev
- 타입의 대한 정의를 해놓음
    - https://github.com/DefinitelyTyped/DefinitelyTyped
    - yarn add @types/node --dev

## install 및 참고 자료

- yarn add graphql-yoga 

> 보안 미들웨어
- yarn add helmet 
- yarn add morgan cors
- yarn add @types/cors, @types/morgan, @types helmet  --dev
- yarn add graphql-tools merge-graphql-schemas

> graphql typescript 연결 및 병합작업
- yarn add graphql-to-typescript gql-merge --dev
- yarn add babel-runtime --dev

> TypeOrm
- https://github.com/typeorm/typeorm
- yarn add typeorm

> postgres 연결
- yarn add pg

> .env 환경설정
- yarn add dotenv