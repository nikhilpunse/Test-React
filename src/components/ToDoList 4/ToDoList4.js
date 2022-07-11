import React, { useState } from 'react';
import './style.css';
// import ToDoList4_component from './ToDoList4_component';
import ToDoList5_component from './ToDoList5_component';

const ToDoList4 = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([]);
    const getInput =(event)=>{
        setInputData(event.target.value);
    }

    const addItem = () =>{
        if(!inputData){
            alert('please provide some input')
        }else{
            setItems([...items,inputData])
            setInputData('');
        }
    }
    const clear = ()=>{
        setItems([])
    }
    
  return (
    <>
        <div className="container">
            <div className="label"> ToDo List</div>
            <div className='input_container'>
                <input placeholder='Add a Item' type="text" value={inputData} onChange={getInput}/>
                <button id='addbtn' onClick={addItem}>+</button>
                <div className="underline"></div>
            </div>
            <ol>
                {items.map((curElem,index)=>{
                    return <ToDoList5_component key={index} index={index} text={curElem} />
                })}
            </ol>
            <button id='clrbtn' onClick={clear}>Clear List</button>
        </div>
    </>
  )
}

export default ToDoList4