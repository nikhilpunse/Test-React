import React from 'react';
import { useState } from 'react';

const Accordion = ({curElem}) => {
  const [toggle,setToggle] = useState(false);

  return (
    <div> 
                <div onClick={()=>{setToggle(!toggle)}} className="flex justify-between items-center px-5 py-2 text-[28px] bg-slate-800 border border-black">
                    <h1 className="">{curElem.que}</h1>
                    <p  className="cursor-pointer text-4xl">{toggle?'-':'+'}</p>
                </div>
                {/* <!-- dropdown section --> */}
                {toggle? <div className="w-full sm:w-[80vw] text-[18px] sm:text-[24px] md:text-left bg-slate-800 border border-black px-5 py-5">
                    {curElem.ans}
                </div> : null }
    </div>
  )
}

export default Accordion;