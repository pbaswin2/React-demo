import constants from "./constant"
const reducer=(state={dinosaur:{}},action)=>{
    switch(action.type){
       
        case constants.FETCH_DINOSAUR_SUCCESS:{
            state={...state,dinosaur:action.payload}
        }
        case constants.FETCH_DINOSAUR_FAILURE:{
            return state;
        }
        default:
        return state;
    }

}

export default reducer