import {Router} from "express";

import UserController from "../controller/UsersController";


const route =  Router(); 


route.get('/', UserController.store)
  

export default route;