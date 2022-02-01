import endpoints from '../../endpoints/graphQL';
import * as query from '../../query/querySecurities';
import * as tc from '../../testcase/tcSecurities';
import dotenv from 'dotenv';

const token = process.env.TOKEN

describe(tc.eventTestCase.positiveCase.describe, () => {   

    // Create New Data
    // beforeAll(async () => {    
    //     const paramI = {
    //         eventInput: ( {
    //             title: "D Test", 
    //             description: "is works", 
    //           	price: 0.90,
    //             date: "2010-10-29T19:16:11.788Z"
    //             } 
    //         )
    //     }        
    //     const response = await endpoints(token, query.seedInsertEvent(paramI));
    //     expect(response.status).toEqual(200);
    //     expect(JSON.parse(response.text)).toMatchSnapshot();
    // });    
    
    test(tc.eventTestCase.positiveCase.successResult, async () => {
        const paramQ = {
            first: 10          
        }
        
        const response = await endpoints(token, query.getEvent());
        expect(response.status).toEqual(200);
        expect(JSON.parse(response.text)).toMatchSnapshot();
    })

})

