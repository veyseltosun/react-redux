import React from 'react'
import "../App.css"
import {useSelector, useDispatch} from "react-redux";


function ComponentA() {
    const myCounter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
  return (
    <div className='App' style={{backgroundColor:"yellow", height:"35vh"}}>
        ComponentA
        <h2>Count:{myCounter} </h2>
        <button onClick={() => dispatch({type:"INCREASE_COUNTER"})}>Artır</button>
        <button onClick={() => dispatch({type:"DECREASE_COUNTER"})}>Eksilt</button>
        
    </div>
  )
}

export default ComponentA