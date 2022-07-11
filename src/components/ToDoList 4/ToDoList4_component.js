import React, { useState } from 'react'

const ToDoList4_component = (props) => {
     const [line,setLine] = useState(false);
     const cutit =()=>{
          setLine(true);
     }
  return (
    <div className='list_container'>
          <span onClick={cutit}>❌</span>
          <li key={props.index} className={line ? 'cross_line' : null} >  {props.text}</li>
         {/* <li key={props.index} style={{textDecoration : line ? 'line-through' : 'none'}} >  {props.text}</li> */}
    </div>
  )
}

export default ToDoList4_component;