import React from 'react';

const Menubar = ({filterData ,menuList}) => {
  console.log(menuList);
  return (
    <>
        <div className="menubar">
        {menuList.map((curElem)=>{
          return ( <p onClick={()=>{ filterData(curElem) }}>{curElem}</p> )
        })}
        </div>
    </>
  )
}

export default Menubar;