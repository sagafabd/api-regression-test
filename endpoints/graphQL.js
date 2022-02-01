import supertest from 'supertest';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import dotenv from 'dotenv';

dotenv.config();

const api = supertest(process.env.BASE_URL)

export default (token,body) => api.post('/graphql')
//.set("Authorization", token)
.send(
    {
        query : jsonToGraphQLQuery(body, { pretty: true })
    }
)