export function setName(name){
    return({
        type:"SetName",
        payload:name
    })
}
export function reset(){
    return({
        type:"Reset"
      
    })
}

export function nextQuestion(){
    return({
        type:"Next"
    })
}



export function success(dinosaur){
    return({
        type:"FETCH_DINOSAUR_SUCCESS",
        payload:dinosaur
    })
}
export function failure(error){
    return({
        type:"FETCH_DINOSAUR_FAILURE",
        payload:error
    })
}
export function dinosaurRequest(){
    return({
        type:"FETCH_DINOSAUR_REQUEST"
    })
}

export const fetchData = () => dispatch => {
  dispatch(dinosaurRequest);
  return fetch("../quiz.json")
        .then(res => res.json())
        .then(json => dispatch(success(json)))
        .catch(err => dispatch(failure(err.message)));
};