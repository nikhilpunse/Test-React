import React, { useState,useEffect } from 'react';
import ToDoList from '../ToDoList/ToDoList';
import './style.css';

// getting data back from localStorage
const getLocalData = ()=>{
    const list = localStorage.getItem('ToDoList');
    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }
}

const ToDoList_2 = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState(getLocalData());
    const [toggleButton,setToggleButton] = useState(false);
    const [editItemIndex,setEditItemIndex] = useState(null);

    // addind item to array
    const addItem = () =>{
        if(!inputData){
            alert('please add some item');
        }else if( inputData && toggleButton){
            const updatedItems = items.map((curElem)=>{
                if(curElem.id == editItemIndex){
                    return {...curElem , name: inputData}
                }else{
                    return curElem;
                }
            })
            setItems(updatedItems)
            setInputData('');
            setToggleButton(false);
            setEditItemIndex(null);
        }else{
            const newInputItem = {
                id :new Date().getTime().toString(),
                name : inputData
            }
            setItems([...items,newInputItem]);
            setInputData('');
        }
    }
    // editing button function
    const editItem =(e_item_id)=>{
        const EditedItem = items.find((curElem)=>{
            return curElem.id == e_item_id;
        });
        setInputData(EditedItem.name);
        setToggleButton(true);
        setEditItemIndex(e_item_id);
    }

    // deleting items from array
    const deleteItem = (d_Item_id) =>{
        const updatedItems = items.filter((curElem)=>{
            return curElem.id != d_Item_id;
        });
        setItems(updatedItems);
    }

    // adding to Array to localStorage
    useEffect(() => {
        localStorage.setItem('ToDoList',JSON.stringify(items));
    }, [items]);
    

  return (
    <>
        <div className="container">
            <img id='todoimg' src="./images/todo.svg" alt="" />
            <label htmlFor="">Add ToDo List Item Here ✌</label>
            <div id='input-bar'>
                <input type="text" placeholder='✍   Add Item' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                {toggleButton ? <span className='plus-icon' onClick={addItem} >✍</span> : <span className='plus-icon' onClick={addItem} >➕</span>}
            </div>
            {items.map((curElem,index)=>{
                return (
                        <div className="showItem" key={index}>
                            <h3>{curElem.name}</h3>
                            <span className='edit' onClick={()=>editItem(curElem.id)}>✍</span>
                            <span className='delete' onClick={()=>deleteItem(curElem.id)}>❌</span>
                        </div>)
            })}
            
            <p id='btn' onClick={()=>setItems([])}>Check List</p>
</div>
    </>
  )
}

export default ToDoList_2;