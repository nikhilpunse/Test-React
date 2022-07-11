import React,{useState} from 'react'

const CreateNote = (props) => {
  const [toggle,setToggle] = useState(false);
  const [inputData,setInputData] = useState({
    title:'',
    content: ''
});

  const inputEvent = (event) =>{
    const {name,value} = event.target;
    setInputData((preValue)=>{
      return {...preValue, [name] : value}
    })
  }

  const addNote = ()=>{
    props.setItems((preValue)=>{
      return [...preValue,inputData]
    })
    setInputData({
      title:'',
      content: ''
    });
  }

  return (
    <> 
      <div className="create_note_wrapper" onDoubleClick={()=>{setToggle(false)}}>
        <div className="addnote">
            <input type="text" name='title' 
            value={inputData.title} 
            onClick={()=>{setToggle(true)}}
            onChange={inputEvent} 
            placeholder='Title...' /> <br />
            {toggle?
            <textarea name='content'
             value={inputData.content}
             onChange={inputEvent} 
             placeholder='Enter Note' cols="30" rows="3"></textarea>
            : null}
            {toggle?
            <button onClick={addNote} className='addbtn'>+</button>
            : null}
        </div>
      </div>
        
    </>
  )
}

export default CreateNote