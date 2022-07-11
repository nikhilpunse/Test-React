import React,{useState} from 'react'
import './style.css'
import ToDoList3_component from './ToDoList3_component';

const ToDoList3 = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([])
     
    const getInput = (event)=>{
        setInputData(event.target.value)
    }

    const addItem = ()=>{
        if(!inputData){
            alert('please enter any items')
        }else{
            setItems((preValue)=>{
                return [...preValue,inputData]
            });
            setInputData('');
        }
        
    }

    const delItem = (id) =>{
        setItems(items.filter((curElem ,index)=>{
            return index !== id ;
        }))
    }

    // const delItem =(id)=>{
    //     const newArr = []
    //     items.map((curElem,index)=>{
    //         if(index !== id){
    //             newArr.push(curElem);
    //             }
    //         })
    //     setItems(newArr)
    // }
    
  return (
    <>
        <div className="container">
            <div className="label"> ToDo List</div>
            <div className='input_container'>
                <input placeholder='Add a Item' type="text" value={inputData} onChange={getInput}/>
                <button id='addbtn' onClick={addItem}>+</button>
            </div>
            <ol>
                {items.map((curElem,index)=>{
                  return <ToDoList3_component curElem={curElem} key={index} index={index} onSelect={delItem}/>
                  {/* <li key={index}> <span onClick={()=>delItem(index)}>❌</span> {curElem}</li> */}
                  
                })}
                 
            </ol>

        </div>
    </>
  )
}

export default ToDoList3;