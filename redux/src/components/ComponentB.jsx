import React from 'react'
import "../App.css"
import {useSelector, useDispatch} from "react-redux";


function ComponentB() {
    const myCounter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  return (
    <div className='App' style={{backgroundColor:"green", height:"35vh"}}>
        
    ComponentB
    <h2>Count:{myCounter} </h2>
    <button onClick={() => dispatch({type: "RESET_COUNTER", payload:0})}>Resetle </button>
    </div>
  )
}

export default ComponentB