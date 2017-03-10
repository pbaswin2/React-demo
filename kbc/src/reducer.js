import constants from "./constant"

const reducer=(state={quiz:[],name:"",currentQues:0,score:0},action)=>{
   
    switch(action.type){
        
        case constants.FETCH_DINOSAUR_SUCCESS:{
            return{...state,quiz:action.payload}
        }

        case constants.FETCH_DINOSAUR_FAILURE:{
            return state;
        }

        case "SetName":
            return {...state,name:action.payload}

        case "Next":
            return{...state,currentQues:state.currentQues+1,score:state.score+1000}
       
        case "Reset":
            return {...state,name:"",currentQues:0,score:0}
        
        default:
            return state;
    }

}

export default reducer