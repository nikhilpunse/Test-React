import React,{useState} from 'react'
import './style.css';

const App1 = () => {    
    const [arr,seArr] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
  return (
    
        <div className="w-[100vw] h-[100vh] flex items-center bg-slate-100 ">
            <div className="py-4 flex items-center overflow-x-scroll  center_div">
            {
                arr.map((val,ind)=>{
                return   <img key={ind} className=' m-2 mx-4 rounded-lg hover:scale-110 css_transition' src={`https://picsum.photos/200/300?${ind}`} alt="" />
                })
            }
            </div>
        </div>
    
  )
}

export default App1