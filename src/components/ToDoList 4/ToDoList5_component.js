import React, { useState } from 'react';

const ToDoList5_component = (props) => {
    const [line,setLine] = useState(false);
    const cutit = () =>{
        setLine(true);
    }
  return (
    <div className='list_container'>
        <span onClick={cutit}>❌</span>
        <li className={line ? 'cross_line' : null}>{props.text}</li>
    </div>
  )
}

export default ToDoList5_component;