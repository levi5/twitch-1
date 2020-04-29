import express  from 'express';

import routes from './routes/routes';



class App{
    public server:express.Application = express();

    constructor(){
        this.Middleware();
        this.Routes();
        
    }
    public Middleware(){
        this.server.use(express.json());
    }
    
    public Routes(){
        this.server.use(routes);
    }
}

export default new App().server;