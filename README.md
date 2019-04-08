# Nuber-server
TypeScript, graphql 를 이용하여 우버 서버 클론하기

## 기능
- [x] 회원가입 기능
- [x] 페이스북 로그인, 일반로그인 기능
- [x] 핸드폰 인증 기능
- [x] jwt 생성
- [x] 유저 프로필 가져오기 / 수정하기
- [x] 장소 추가 / 수정 / 삭제 / 즐겨찾기 하기
- [x] 위치 / 방향 리포트
- [x] 근처 운전자 보기
- [x] 드라이빙 모드
- [x] Subscribe로 접근 운전자 확인
- [x] 탑승자 상태 수정
- [x] 탑승 요청하기
- [x] 근처 자동차 잡기
- [x] 요청 상태 확인 기능 / status
- [ ] 채팅방 만들기
- [ ] 실시간 채팅
- [ ] 탑승기록 확인
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

## twilio
- https://www.twilio.com
- 번호 구매 및 token 연결
- yarn add twilio
- yarn add @types/twilio --dev

## API 설명

### Place
    AddPlace : 장소 추가
    DeletePlace : 장소 삭제
    EditPlace : 장수 수정
    GetMyPlaces : 나의 위치 가져오기

### Ride
    GetNearbyRides: 근처 탑승자 가져오기
    RequestRide : 탑승 요청하기

### User
    CompleteEmailVerification : 이메일 인증 완료
    CompletePhoneVerification : 핸드폰 인증 완료
    DriversSubscription : 운전자 구독하기
    EmailSignIn : 이메일 로그인
    EmailSignUp : 이메일 회원가입
    FacebookConnect : 페이스북 로그인
    GetMyProfile : 나의 프로필 가져오기
    GetNearbyDrivers: 근처 운전자 가져오기
    ReportMovement: 움직인 보고하기
    RequestEmailVerification: 이메일 인증 요청하기
    StartPhoneVerification: 핸드폰 인증하기
    ToggleDrivingMode : 운전모드 토글
    UpdateMyProfile: 나의 프로필 수정하기

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

> JWT
- yarn add jsonwebtoken
- yarn add @types/jsonwebtoken --dev