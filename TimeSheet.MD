=============================   2022-05-25  ==============================

1. prisma 설치

   - npm install prisma --save-dev

1. prisma schema 생성

   - npx prisma init
   - 실행 후 schema.prisma, .env 파일 생성
   - .env 파일에 Database 정보 입력 (database name, user, password)
   - migrations 폴더 생성 폴더 안에는 Database sql 문이 들어있다.
   - package.json 에 script 로 migration 명령어를 추가하였다.

1. prisma client 설치

   - npm install @prisma/client

1. prisma 를 이용한 Apollo Query, Mutation 체험
   
   - Apollo Operation 에서 사용할 Query, Mutation 을 작성한다.
   - Variables 에서 Parameter 값을 입력한다.
   - Response 에서 Variables 를 이용한 Operation 결과를 확인할 수 있다.

2. prisma studio

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