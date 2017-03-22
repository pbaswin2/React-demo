

const reducer=(state={runs:0,ball:0,four:0,six:0,dot:0},action)=>{
   
    switch(action.type){
        
        case "Run":{
           switch(action.payLoad){
            case 0:{
                return Object.assign({},state,{ball:state.ball+1,dot:state.dot+1})
            }
            case 1:
            case 2:
            case 3:{
                return Object.assign({},state,{runs:state.runs+action.payLoad,ball:state.ball+1})
            }
            case 4:{
                  return Object.assign({},state,{runs:state.runs+action.payLoad,ball:state.ball+1,four:state.four+1})
            }
            case 6:{
                   return Object.assign({},state,{runs:state.runs+action.payLoad,
                    ball:state.ball+1,
                    six:state.six+1
                })
            }
            default:
            return state
           }
        }

        default:
            return state;
    }

}

export default reducer