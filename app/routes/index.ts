import {Application} from 'express'
import welcome from '../controllers/welcome'



 export class routeIndex {

    constructor(app: Application) {
        app.route('').get(welcome)
    }
}