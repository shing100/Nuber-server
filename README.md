# Nuber-server

## 초기 세팅
- yarn add typescript ts-node nodemon --dev
- yarn add tslint-config-prettier --dev
- 타입의 대한 정의를 해놓음
    - https://github.com/DefinitelyTyped/DefinitelyTyped
    - yarn add @types/node --dev

## install

- yarn add graphql-yoga 

> 보안 미들웨어
- yarn add helmet 
- yarn add morgan cors
- yarn add @types/cors, @types/morgan, @types helmet  --dev
- yarn add graphql-tools merge-graphql-schemas

> graphql typescript 연결 및 병합작업
- yarn add graphql-to-typescript gql-merge --dev
- yarn add babel-runtime --dev