import {Request, Response} from "express";

import participants from '../utils/getUserTwitch';

interface FactoryViewer{
    name:string,
    points:number|any,
}


class UserController{
    public async store(_resquest:Request, response:Response):Promise<Response>{

        
        const factoryViewer = ([name, points]:Array<string>):FactoryViewer => ({ name, points });
        const viewers = Array.from(participants).map(factoryViewer);
      
        const top10 = viewers
          .sort((a, b):number => (a.points > b.points ? 1 : -1))
          .slice(0, 10);
          return response.json(top10);

        /**
         * save users to the database
         */
    }
}

export default new UserController;