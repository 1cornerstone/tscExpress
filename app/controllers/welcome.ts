import {Request,Response} from 'express'
function welcome(req: Request, res:Response):Response {

    return res.send('hello world');
}

export default welcome;