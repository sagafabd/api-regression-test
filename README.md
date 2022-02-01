# api-regression-test

Tool Stack :
- Editor : Visual Studio Code
- Application and Data : Node.js, MongoDB, CSV, GraphQL
- DevOps : Jest, Git, Github, Jenkins

Step To Reproduce :
- Create 1 project in VSCode
- Create Folder Name by project "api-regression-test" and "running-api-graphQL"
- Open Visual Studio Code in two project

Project 1 - "api-regression-test" 
- Open terminal (ctrl+`)
- install (npm init -y) npm init -> package.json
- install (npm i ...[npm dependencies] --save-dev) depedency -> fs, jest, jest-json-schema, jest-to-graphql-query, jwt-decode, react, @babel/core, @babel/preset-env, @babel/preset-react, babel-eslint, babel-jest, dotenv, eslint, supertest, shell, write-json-file 
- update package.json -> "script" :{ "test" : "jest"}
- create file graphQL.js, jest.setup.js, jest.config.js, babel.config.js, .env, .eslintr.js, securities-base-file.js, securities-secondary.file.js
- create folder __tests__, endpoints workspace, query, testcase

![Foldering-AT API](https://user-images.githubusercontent.com/61061592/151890418-24b0def6-18d6-490c-8000-afbabe0caf16.png)

Running CSV 
- run test difference csv -> node csvValidation.js --max_old_space_size=5000
- generate file diff.csv, output difference data csv 1 and 2 (row 1, 10, 100, 1000, 10000, 50000, 81486)

Running Test API
- run test "npm run test getSecurities.js
- generate snapshot 

Improv :
- Create DB & API not release this repo because not ready for mutation delete and update data
- Current condition csv file not generate test API, next expected result test API not snapshot but generate csv file and compare csv diff, after that save into database
- Data sample not securities exchange
- Create DB and API data into 1 million record
- CI/CD : jenkins running any change code, so call repo latest version AT API and running all scenario. If all passed code success updated, else any scenario fail change code return version latest.   

![Design-AT API](https://user-images.githubusercontent.com/61061592/151870738-8cb34e5b-e572-40c1-882a-9f9540e534e7.png)
![Design-AT API DATA CSV](https://user-images.githubusercontent.com/61061592/151872843-c9d7fb69-6686-4485-bbc5-63165ab1f0e0.png)
