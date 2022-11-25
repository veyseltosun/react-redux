import React from 'react'
import "../App.css"
import {useSelector} from "react-redux";


function ComponentB() {
    const myCounter = useSelector((state) => state.counter);
  return (
    <div className='App' style={{backgroundColor:"green", height:"35vh"}}>
        
    ComponentB
    <h2>Count:{myCounter} </h2>
    </div>
  )
}

export default ComponentB