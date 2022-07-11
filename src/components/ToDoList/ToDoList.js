import React, { useEffect, useState } from 'react';
import './style.css';

const getLocalData =()=>{
    const list = localStorage.getItem('ToDoList');
    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }
}

const ToDoList = () => {
    const [inputData,setInputData] = useState("");
    const [items,setItems] = useState(getLocalData());
    const [toggleButton,setToggleButton] = useState(false);
    const [editItemIndex,setEditItemIndex] = useState();
    
    // adding items to 'items array'
    const addItem = ()=>{
        if(!inputData){
            alert('please enter some item');
        }else if(inputData && toggleButton){
            setItems( items.map((curElem)=>{
                if(curElem.id == editItemIndex){
                    return {...curElem, name : inputData}
                }else{
                    return curElem;
                }
            }))
            setToggleButton(false);
            setInputData('');
            setEditItemIndex(null)
        }
        else{
            const myNewInputData ={
                id :new Date().getTime().toString(),
                name : inputData,
            }
            setItems([...items, myNewInputData]);
            setInputData('');
        }
    }

    // editing list item
    const editItem = (index)=>{
        setToggleButton(true);
        const editItem = items.find((curElem)=>{
            return curElem.id == index;
        })
        setInputData(editItem.name);
        setEditItemIndex(index);
    }

    // deleteing item from 'items array'
   const delElement = (index)=>{
        const updatedItems = items.filter((curElem)=>{
            return curElem.id !== index;
        });
        setItems(updatedItems);
   };

//    addind Element to local storage
   useEffect(()=>localStorage.setItem('ToDoList',JSON.stringify(items)),[items]);
   

  return (
    <>
        <div className="container">
            <img id='todoimg' src="./images/todo.svg" alt="" />
            <label htmlFor="">Add ToDo List Item Here ✌</label>
            <div id='input-bar'>
                <input type="text" placeholder='✍   Add Item' value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
                {toggleButton ? <span className='plus-icon' onClick={addItem}>✍</span> : <span className='plus-icon' onClick={addItem}>➕</span>}
            </div>

            {items.map((curElem,index)=>{
                return (
                   <div className="showItem" key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <span className='edit' onClick={()=>editItem(curElem.id)}>✍</span>
                        <span className='delete' onClick={()=>delElement(curElem.id)}>❌</span>
                    </div>
                    )
                })}
            <p id='btn' onClick={()=>setItems([])}>Check List</p>
            
        </div>
    </>
  )
}

export default ToDoList;