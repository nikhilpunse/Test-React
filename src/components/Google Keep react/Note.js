import React from 'react'

const Note = (props) => {
  const deleteItem = () =>{
    props.deleteItem(props.index);
  }

  return (
    <>
        <div className="note_container">
            <h2>{props.curElem.title}</h2>
            <h3>{props.curElem.content}</h3>
            <p onClick={deleteItem} className='delbtn'>❌</p>
        </div>
    </>
  )
}

export default Note