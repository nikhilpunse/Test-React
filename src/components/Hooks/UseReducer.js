import React, { useState,useReducer } from 'react';
import './style.css'
const UseReducer = () => {
   
    const reducer = (state,action)=>{
        if(action.type=='INCR'){
            state= state + 1;
        }
        if(state > 0 && action.type == 'DECR'){
            state = state - 1;
        }
        return state;
    }
    const [state, dispatch] = useReducer(reducer,0);
  return (
    <>
        <div class="container">
            <h2 id="show">{state}</h2>
            <div class="btn">
                <p id="incr" class="btns" onClick={()=>dispatch({type:"INCR"})}>INCR</p>
                <p id="decr" class="btns" onClick={()=>dispatch({type:"DECR"})}>DECR</p>
            </div>
        </div>
    </>
  )
}

export default UseReducer;