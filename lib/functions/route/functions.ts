import { RestApi, LambdaIntegration, Authorizer, AuthorizationType, Resource } from "@aws-cdk/aws-apigateway"
import { Stack} from '@aws-cdk/core'



import {makeSendMessageLambda} from '../lambdas/sendMessage'




export const functionRoutes = (api: RestApi, stack: Stack): void => {
    const functionWhats = api.root.addResource('function')
    // user.addCorsPreflight({
    //     allowHeaders: ['Content-Type,X-Amz-Date,Authorization,X-Api-Key'],
    //     allowOrigins: ['*'],
    //     allowMethods: ['*']
    // })

    sendMessage(stack, functionWhats)
    

}

const sendMessage = (stack: Stack, functionResource: Resource) => {
    const makeSendMessage = makeSendMessageLambda(stack)
    functionResource.addMethod('POST', new LambdaIntegration(makeSendMessage))
}
