import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducer from "./reducer"

const store=createStore(reducer,{quiz:[],name:"",currentQues:0,score:0},applyMiddleware(thunk,logger()));


export default store