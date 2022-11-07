// This is a reducer function and here we will write the code for how we will change the state
const initialState = 0;

//Writing reducer function
const changeNumber = (state = initialState, action) => {
    switch(action.type){
        case "increment" : return state + 1; //if state is "increment"
        case "decrement" : return state - 1; //if state is "decrement"
        default :  return  state;

    }
}
export default changeNumber;