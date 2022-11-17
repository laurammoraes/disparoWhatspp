import {Stack} from '@aws-cdk/core'
import { TypeScriptFunction }  from 'cdk-typescript-tooling'
// import { makeDynamodbReadandWriteCustomer} from '../../policies/dynamodb-read-and-write-CUSTOMER'

export const makeSendMessageLambda = (stack: Stack) => {
    return new TypeScriptFunction(stack, 'sendMessage', {
        entry: require.resolve('../handlers/sendMessage/send.ts'),
        functionName: 'FUNCTION-sendMessage', 
        initialPolicy:[]
    })
}