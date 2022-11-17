import * as cdk from '@aws-cdk/core'
import {functionTestApi} from '../lib/app/app'


const app = new cdk.App()
const stacks = {
    functionApi: new functionTestApi(app, 'AppFunction')
}

export default stacks