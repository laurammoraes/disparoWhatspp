import { APIGatewayProxyEvent, APIGatewayProxyResult, } from "aws-lambda";
import { ok, serverError } from "../../../helpers/http";
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-2"});
const axios = require('axios');


//   export const handler = async() => {
// export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
exports.handler = async function(event: APIGatewayProxyEvent) {
   console.log(event);

   const body = JSON.parse(event.body);
   console.log(body);
   const number = body.number;
   const token = body.token;
   console.log(number);
  


    const response = await axios.post(
        'https://graph.facebook.com/v15.0/102140522709208/messages',
        // '{ "messaging_product": "whatsapp", "to": "5519993417478", "type": "template", "template": { "name": "hello_world", "language": { "code": "en_US" } } }',
        {
            'messaging_product': 'whatsapp',
            'to': number,
            'type': 'template',
            'template': {
                'name': 'hello_world',
                'language': {
                    'code': 'en_US'
                }
            }
        },
        {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }
        
    );
    console.log(response.status)
    try{
        const data = {
            response: "Mensagem enviada com sucesso"
            }
        return ok(data)
    }catch(error){
        return serverError(error)
    }
   
    

  } 




