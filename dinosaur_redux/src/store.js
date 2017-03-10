import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducer from "./reducer"

const store=createStore(reducer,{dinosaur:{}},applyMiddleware(thunk,logger()));


export default store