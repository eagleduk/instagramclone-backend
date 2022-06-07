=============================   2022-06-06  ==============================

1. prisma schema

   - 1 대 N 관계의 schema 모델을 생성하면, 자동적으로 schema.prisma 파일에 relation 관계가 입력된다.
   - 실제로 칼럼이 생성되는게 아니고, 개발자가 이해할 수 있도록 schema 파일에 입력된다.

1. prisma client

   - 또다시 generate 가 제대로 동작하지 않아 node_modules 삭제 및 npx prisma generate 등 다시 여러번 실행...

1. connectOrCreate

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