import { combineReducers } from "redux";
import app from "./appDuck"; 
import poke from "./pokeDuck"; 


export default combineReducers({
  app,
  poke
});
