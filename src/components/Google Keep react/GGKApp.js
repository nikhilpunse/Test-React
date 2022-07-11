import React, { useState,useEffect } from 'react'
import './style.css';
import Header from './Header'
import CreateNote from './CreateNote'
import Note from './Note'
import Footer from './Footer'
const GGKApp = () => {
  
 const [items,setItems] = useState([]);
  const deleteItem =(id)=>{
    setItems(items.filter((curElem,index)=>{
      return index !== id;
    }))
 }
 
 return (
    <>
      <Header />
      <CreateNote setItems={setItems}/>
      <div className="note_wrapper">
      {items.map((curElem, index)=>{
        return <Note deleteItem={deleteItem} curElem={curElem} index={index}  key={index}/>
      })}
        
      </div>
      <Footer/>
    </>
  )
}

export default GGKApp;