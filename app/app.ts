import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import {routeIndex as Routes} from './routes/index'

class App {

    public app : express.Application;
     private route:Routes;

  constructor() {
      this.app = express();
      this.config();
      this.route = new Routes(this.app);
  }

  config ():void{
      this.app.use(cors());
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({extended :false}));

  }

}

export default new App().app;