import React from 'react'
import "../App.css"
import {useSelector} from "react-redux";

function ComponentA() {
    const myCounter = useSelector((state) => state.counter)
  return (
    <div className='App' style={{backgroundColor:"yellow", height:"35vh"}}>
        ComponentA
        <h2>Count:{myCounter} </h2>
        <button>Artır</button>
        <button>Eksilt</button>
        
    </div>
  )
}

export default ComponentA