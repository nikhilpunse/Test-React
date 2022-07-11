import React from 'react'

const ToDoList3_component = (props) => {
     return <li> <span onClick={()=>props.onSelect(props.index)}>❌</span> {props.curElem}</li>
}

export default ToDoList3_component;