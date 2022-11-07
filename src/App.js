import React from "react";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'
import { inc, dec } from './actions/index'
// import changeNumber from "./reducers/incDec";

function App() {
  //UseSelector to select the reduce function and set that state to curent state
  // Syntax : const <stateName> = useSelector( (<StateValue>) =>{ <ReducerFunctionName> })
  const myState = useSelector( (state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="in">
        <div className="heading">
          <h1>Increment/Decrement counter</h1>
          <h2>Using Redux</h2>
        </div>
        <div className="bdy">
          <button onClick={ () => dispatch(dec()) }> Decrement </button>
          <h3>{myState}</h3>
          <button onClick={ () => dispatch(inc())}> Increment </button>

        </div>
      </div>
    </div>
  );
}

export default App;
