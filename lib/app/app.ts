import { App, Stack} from '@aws-cdk/core'

import {functionApi} from '../functions/api/api'



export class functionTestApi extends Stack {
    constructor(app: App, stackName:string){
        super(app, stackName)

        
       
        functionApi(this)
       
    }
}