import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducer from "./reducer"

const store=createStore(reducer,{runs:0,ball:0,four:0,six:0,dot:0},applyMiddleware(logger()));


export default store