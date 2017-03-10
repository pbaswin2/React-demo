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
  return fetch("https://dinosaur-facts.firebaseio.com/dinosaurs.json")
        .then(res => res.json())
        .then(json => dispatch(success(json)))
        .catch(err => dispatch(failure(err.message)));
};