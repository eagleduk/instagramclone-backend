=============================   2022-05-31  ==============================

1. user update

   - username 기준으로 수정 구현

1. user login

1. Divide and Conquer

   - 모듈별 create / search / update 등 액션으로 typeDefs, resolvers 구현

1. login 시 생성된 token 을 header 에 삽입

1. update 시 token을 이용하여 수정

   - headers 데이터는 ApolloServer 에서 context 에 담아준다.

1. currying => 함수1에 함수2를 보내어 함수2의 결과값을 함수1의 결과값으로 하는 문법.
   
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