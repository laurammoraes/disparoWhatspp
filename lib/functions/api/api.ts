import { Stack } from "@aws-cdk/core";
import {Cors, RestApi} from '@aws-cdk/aws-apigateway'


import { functionRoutes } from '../route/functions'

// import { UserPool } from "@aws-cdk/aws-cognito";

export function functionApi(stack: Stack){
    const api = new RestApi(stack, 'functionApi',{
        restApiName: 'functionAPI',
        defaultCorsPreflightOptions: {
            allowHeaders: [
                "Content-Type",
                "X-Amz-Date",
                "Authorization",
                "X-Api-Key",
            ],
            allowMethods: [ "OPTIONS","GET", "POST", "PUT", "PATCH", "DELETE"],
            allowCredentials: true,
            allowOrigins: ["*"]
        }
    })
    // const userAuthorizer = makeUserAuthorizer(stack, userPool)
    functionRoutes(api, stack)
    
    return api

}


