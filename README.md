# Nuber-server
TypeScript, graphql 를 이용하여 우버 서버 클론하기

## 기능
- [ ] 회원가입 기능
- [ ] 페이스북 로그인, 일반로그인 기능
- [ ] 핸드폰 인증 기능
- [ ] 유저 프로필 가져오기 / 수정하기
- [ ] 장소 추가 / 수정 / 삭제 하기
- [ ] 위치 / 방향 리포트
- [ ] 근처 운전자 보기
- [ ] 드라이빙 모드
- [ ] Subscribe로 접근 운전자 확인
- [ ] 탑승 요청하기
- [ ] 근처 자동차 잡기
- [ ] 요청 상태 확인 기능 / status
- [ ] 실시간 채팅 기능
- [ ] 탑승기록 확인 기능
- [ ] 탑승 디테일

## 초기 세팅
- yarn add typescript ts-node nodemon --dev
- yarn add tslint-config-prettier --dev
- 타입의 대한 정의를 해놓음
    - https://github.com/DefinitelyTyped/DefinitelyTyped
    - yarn add @types/node --dev

## Verification
    v = Verification
    v.target = phone
    v.payload = +41434235
    v.key = 3456

    hello verify with the number 3456
    인증번호 입력 3456
    
    v(payload:+41434235 , key:1234)
    확인

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
- https://github.com/typeorm/typeorm/blob/master/docs/decorator-reference.md#column
- yarn add typeorm

> postgres 설치 및 컬럼 타입
- yarn add pg
- https://github.com/typeorm/typeorm/blob/master/docs/entities.md#column-types-for-postgres


> .env 환경설정
- yarn add dotenv

> class validator
- https://github.com/typestack/class-validator

> 비밀번호 암호화
- yarn add bcrypt
- yarn add @types/bcrypt --dev

> 인증 관련 자료
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString