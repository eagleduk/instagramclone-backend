=============================   2022-08-11  ==============================
#### Deploy
1. install babel cli 
   - npm i @babel/cli --dev-only

1. 파일 이동
   - 소스 폴더 `src` 로 이동
   - `package.json` script 수정

2. build script 생성
   - babel `[build target]` --out-dir `[build output]`

3. start script 생성

   - build 된 소스로 서버 실행
   - node build/server.js
   - regenerator-runtime 발생시

      1. https://babeljs.io/docs/en/babel-plugin-transform-regenerator 참조
      2. @babel/plugin-transform-runtime 설치
         - npm install --save-dev @babel/plugin-transform-regenerator
      3. babel.config.json plugin 추가
         - "plugins": ["@babel/plugin-transform-regenerator"]

4. heroku deploy
   1. heroku 회원가입
   2. create new app
   3. Config Vars 입력
      - .env 파일의 내용은 git 에 업로드 되지 않음으로, 그에 맞는 key, value 를 동일하게 입력

   4. Database 생성

      - Resources -> Add-ons 에서 heroku 에서 제공하는 Database 를 선택할 수 있다.
      - Database 를 선택하면 자동으로 Database Url 이 `Config Vars` 에 입력된다.

   5. 변경내용 Commit
      - Deploy 시 branch 의 내용을 바탕으로 서비스 하기 때문에 미리 수정내역을 push 로 GitHub 에 적용해 두어야 한다.

   6. Deploy
      1. Deploy -> GitHub 를 선택하여 GitHub 의 repository 에서 자동으로 Deploy 되도록 설정

=============================   2022-07-18  ==============================

1. User 정보에서 Photo(feed) 리스트 추가
2. unfollowingUser 완성

=============================   2022-07-13  ==============================

1. feed 검색 결과에 대하여 최신순으로 정렬 추가
2. feed 에 대한 comment 결과에 대하여 최신순으로 정렬 추가

=============================   2022-07-07  ==============================

1. feed 결과값에 comments 갯수가 아닌 comment 자체를 리턴
2. comment 결과에 작성한 user 정보 추가

=============================   2022-07-07  ==============================

1. feed 에 대한 login user like / unlike 상태 추가

=============================   2022-06-28  ==============================

1. git clone 이후 altair 에서의 파일 업로드가 정상 동작하지 않는 문제 발생..

   - graphql-upload 최신버전 으로 업데이트해도 에러발생...
   - 개발자 도구 로그를 보니 CSRF 에러 발생하는 것으로 판단..
   - server 시작시 `csrfPrevention` 값을 false 로 변경하니 정상 동작..
   - 아마도 CSRF(Cross-Site Request Forgery) 를 방지 유무(true / false) 를 선택하는 듯.. 

=============================   2022-06-17  ==============================

1. 실시간 websocket 개발(ws.resolvers.js 참조)

   - subscription 타입의 typedef 필요
   - 또한 resolver 에서 subscription subscription명 <strong>subscribe</strong> 필요
   - pubSub asyncIterator([감시명]) 형태로 오픈,
   - pubSub publish([감시명],{subscription명: {subscription 결과 object}}) 로 감시할 resolver 에서 호출
   - withFilter 를 사용하면, 실시간 websocket 에서 filter 를 사용할 수 있다.
   - subscribe 는 반드시 "AsyncIterator" 타입을 반환해야 한다.
   - withFilter 사용시, 두번째 인자의 결과값(BOOLEAN) 에 따라서 감시 여부를 결정.
   - 감시를 시작할 시기에, 자체호출 function 으로 또한번 검사를 사용할 수 있다. <strong>(async(...) ~ {}(...) 부분)</strong>

=============================   2022-06-16  ==============================

1. realtime subscription

   - websocket 으로 실시간 connection 연결으로 원하는 resolver 를 감시할 수 있다.
   - 기존에는 apollo-server 에서 지원을 해주었지만, 현재는 graphql-subscriptions 를 설치해야 사용 가능
   - npm install graphql-subscriptions 
   - 동영상과는 버전 차이가 많이 나오기 때문에 https://www.apollographql.com/docs/apollo-server/data/subscriptions/#enabling-subscriptions 참조
   - 서버 설정을 위해 패키지 추가 설치
   - npm install graphql-ws ws apollo-server-core
   - 불과 몇 개월 전만 해도 graphql-ws 를 사용하지 않고 subscriptions-transport-ws 를 사용 하지만 서버는 graphql-ws 를 사용한다.
   - 그래서 apollo studio 에서 서버 설정 -> implementation 을 graphql-ws 로 변경하지 않으면 subscriptions 실행시 연결이 되지 않는다.
   - graphql-ws github 에서 찾음.. https://github.com/enisdenjo/graphql-ws#readme
   - 추후 다른 client 를 사용할때 도움이 될지도..?

=============================   2022-06-15  ==============================

1. message 보내기

   - message 보낼 시 chat 가 있으면 해당 chat 와 연결,
   - chat 가 없을 시 새로운 chat 를 만들고 해당 message 와 연결

2. chat 보기

   - 현재 chat 에는 2명으로 제한
   - 현재 접속자가 속해있는 모든 chat 보기
   - chat ID 로 chat 보기

3. 해당 chat 에 있는 user 정보 가져오기
4. 해당 chat 에 있는 message 가져오기

   - message 를 보낸 사람에 대한 정보도 가져오기

5. 해당 chat 에 있는 사람의 message 확인 유무 

   - 보낸 사람과 연결되어 있는 message 는 제외
   - 보낸 사람을 제외한 사람에 관하여, message 확인

6. git commit 삭제

   - git log 로 commit 번호 및 내역 확인
   - git reset HEAD~#
     - HEAD 부터 # 번째 까지 reset ( 되돌리기 )
     - commit 내역만 사라지고 수정한 내용은 남는다.

=============================   2022-06-14  ==============================

1. chat, message model


=============================   2022-06-13  ==============================

1. aws 업로드

   1. aws sdk 설치

      - npm install aws-sdk

   1. AWS User, Bucket 생성

      - User accessKey, secretKey 중요
      - User S3 관련 Full 권한
      - Bucket ACL 권한 활성화

   1. aws 파일 업로드시 폴더 명까지 입력해서 파일을 업로드 할 수 있다.

=============================   2022-06-09  ==============================

1. comment model

   - User, Photo 와 1대1 관계


2. photo, comment delete

   - 객체(photo, comment) 가 존재하는지 확인
   - 객체(photo, comment) 의 소유자가 본인인지 확인

3. gql Result 통합

   - 같은 타입의 result 를 하나로 통합

4. protectedResolver 보완

   - protectResolver 실행시 info 를 이용하여 Query, Mutation 분리
   - info 에는 apollo-server 에서 실행중인 Query 또는 Mutation 의 정보가 들어있다.
   - info 에서 query, mutation 구분을 통하여 반환되는 정보를 나눌 수 있다.

=============================   2022-06-08  ==============================

1. gql fields => graphQL 기능

   - Computed fields 는 Database 에 없는 schema 를 동적으로 생성하는 거라면,
   - field 를 함수로 만들어 값을 전달 할 수도 있다!

2. like 기능 추가

   - like / unlike toggle
   - like User List
   - following 및 내 사진 feed List

3. like model @@unique

   - 여러개의 칼럼을 동시에 unique (아마도 primaryKey) 로 묶는 문구
   - @@unique 로 묶인 칼럼의 데이터가 모두 같도록 할 수는 없다.
   - 또한 @@unique 로 묶인 칼럼들로 데이터를 검색할 수도 있다.

4. prisma client 업데이트( 다시 버전 다운 )

   - prisma generate 시 warn version message
   - PrismaClient 가 @prisma/client => @prisma/client/edge 로 변경

5. typeDefs 에서 Mutation, Query 에서 인자(args)가 필요 없을 때 ()는 생략가능
6. PrismaClient Query 를 작성할 시

   - select: 보고싶은 데이터만 추출하고 싶을 때
   - relation 이 있을 때에는 select 안의 select 로 relation 스키마의 칼럼만 추출할 수도 있다.
   - include: relation 이 있는 데이터도 같이 추출하고 싶을 때
   - select 와 include 를 동시에 사용할 수는 없다.

=============================   2022-06-06  ==============================

1. prisma schema

   - 1 대 N 관계의 schema 모델을 생성하면, 자동적으로 schema.prisma 파일에 relation 관계가 입력된다.
   - 실제로 칼럼이 생성되는게 아니고, 개발자가 이해할 수 있도록 schema 파일에 입력된다.

2. prisma client

   - 또다시 generate 가 제대로 동작하지 않아 node_modules 삭제 및 npx prisma generate 등 다시 여러번 실행...

3. connectOrCreate

   - 데이터가 존재하면 connect, 데이터가 존재하지 않으면 create 를 자동적으로 수행하는 prisma client 키값
   - 단 데이터를 찾을 때, 칼럼이 unique 인 칼럼을 통해서만 가능하다.
   - unique 는 필수로, 다른 칼럼은 옵션으로 사용 가능


=============================   2022-06-06  ==============================

1. prisma pagination

   1. offset pagination

      - skip 으로 제외 할 갯수를 지정하고 take 로 가져올 갯수를 지정
      - page 갯수가 필요한 상황에서 사용

   2. cursor pagination

      - cursor 로 가지고 올 데이터를 결정하고 그 이후의 skip 으로 제외 할 갯수를 지정하고 take 로 가져올 갯수를 지정
      - page 갯수가 필요하지 않은 상황에서 사용


=============================   2022-06-02  ==============================
1. stream save

   - Upload Schema 의 createReadStream 함수를 실행 하여 stream 생성
   - 파일을 저장할 위치의 fs.createWriteStream 함수를 사용하여 stream 생성
   - readStream 에서 pipe 로 writeStream 을 연결 하여 파일 저장.

2. express 정적 파일 제공

   - express 의 미들웨어를 사용하여 URL 경로를 디렉토리에 연결

3. uploads 폴더 gitignore 설정
4. follower following 관계

   - follower: 나를 보는 사람
   - following: 내가 보는 사람

5. User Schema 추가

   - followers, followings
   - relations 관계로 연결해 준다.
   - connect, disconnect 를 이용하여 쉽게 추가 / 삭제가 가능하다.

6. Computed fields

   - Database 에 존재하지 않는 schema 를 사용하여 결과값을 만들어 낸다.
   - 현재 사용자와 보고 있는 사용자가 동일한지, 현재 following 중인지, follower/following 수 등 database 에 저장하지 않는 결과값을 도출할 때 사용

7. User Search

=============================   2022-06-01  ==============================

1. file upload

   - apollo 의 upload 타입을 사용하기 위해서 graphql-tools 에서의 merge 제거
   - file type 의 schema 를 사용하기 위해서는 apollo-server-express 로 변경 필요

2. express 서버로 변경

   - npm i express apollo-server-express
   - express 의 static router 를 사용하기 위해 설치 필요
   - express 에서 file-upload 를 사용하기 위해 npm i graphql-upload 설치
   - https://www.apollographql.com/docs/apollo-server/data/file-uploads/ 참고하여 Upload Schema 사용 가능하게 만든다.
   - 해당 문서도 시간이 좀 된거인가 적용하는데 문제가 많이 생김

      1. GraphQLUpload, graphqlUploadExpress 가 graphql-upload 의 각각 js 파일의 default 로 import
      2. schema 의 merge 기능 사용 불가
      3. server 시작시 express 로 변경 후 graphqlUploadExpress() use
      4. Upload: GraphQLUpload, 타입의 resolver 추가
      5. gql 에서 scalar Upload 추가
      6. 서버 url 이 변경됨 (/graphql 추가)

=============================   2022-05-31  ==============================

1. user update

   - username 기준으로 수정 구현

2. user login

3. Divide and Conquer

   - 모듈별 create / search / update 등 액션으로 typeDefs, resolvers 구현

4. login 시 생성된 token 을 header 에 삽입

5. update 시 token을 이용하여 수정

   - headers 데이터는 ApolloServer 에서 context 에 담아준다.

6. currying => 함수1에 함수2를 보내어 함수2의 결과값을 함수1의 결과값으로 하는 문법.
   
   - resolver projected 목적으로 사용
   - token 이 필요한 resolver 에서 통합적으로 token 의 유무를 파악하기 위해 사용했다.

=============================   2022-05-30  ==============================

1. clone coding init

   - 스키마 삭제 
   - 모델링 (typeDefs, queries, mutations) 삭제
   - Database 삭제
  
2. user modeling

   - npx prisma init
   - schema.prisma user modeling
   - user typeDefs, queries, mutation 생성
   - PrismaClient modeling 적용이 안되어서 node_modules 삭제 후 재 설치...

3. bcrypt 설치

   - npm i bcrypt
   - password 암호화를 위한 패키지

4. jsonwebtoken 설치

   - npm i jsonwebtoken
   - client 에 token 을 전달하기 위한 패키지

=============================   2022-05-26  ==============================

1. graphql-tools 설치

   - npm i graphql-tools => 더이상 사용되지 않는듯.. 모듈에 따라 나뉘어 짐
   - npm i @graphql-tools/load-files : 파일을 읽기위한 패키지
   - npm i @graphql-tools/merge  : typeDefs, resolver Merge 를 위한 패키지
   - npm i @graphql-tools/schema : Merge 된 typeDefs, resolver 를 schema 로 변경하기 위한 패키지

2. dotenv 설치

   - npm i dotenv
   - env 파일의 환경변수를 적용하기 위한 패키지
   - 제일 처음에 import 하면 하위 파일에서 사용이 가능하다.

=============================   2022-05-25  ==============================

1. prisma 설치

   - npm install prisma --save-dev

2. prisma schema 생성

   - npx prisma init
   - 실행 후 schema.prisma, .env 파일 생성
   - .env 파일에 Database 정보 입력 (database name, user, password)
   - migrations 폴더 생성 폴더 안에는 Database sql 문이 들어있다.
   - package.json 에 script 로 migration 명령어를 추가하였다.

3. prisma client 설치

   - npm install @prisma/client

4. prisma 를 이용한 Apollo Query, Mutation 체험
   
   - Apollo Operation 에서 사용할 Query, Mutation 을 작성한다.
   - Variables 에서 Parameter 값을 입력한다.
   - Response 에서 Variables 를 이용한 Operation 결과를 확인할 수 있다.

5. prisma studio

   - DataBase 를 웹 GUI 로 확인 가능
   - package.json 에 script 로 studio 실행 명령어 작성.

=============================   2022-05-24  ==============================

1. GitHub Repository 생성
2. 개발 환경 생성
3. 개발 Package 설치

   1. apollo server 설치

      - npm install apollo-server graphql

   2. nodemon 설치

      - npm install -g nodemon

   3. babel 설치

      - npm install --save-dev @babel/core
      - npm install @babel/preset-env --save-dev
      - npm install @babel/node --save-dev

4. Apollo Query, Mutation 체험