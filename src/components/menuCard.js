import React from 'react';

const MenuCard = ({menuData}) => {
  return (<>
        <div className="wrapper">
        
        {menuData.map((curElem)=>{
            const {id,name,image,category,price,description} = curElem;
            return  ( <>
                 <div className="container" key={id}>
                     <img className='image' src={image} alt="" />
                     <h2>Item : {name}</h2>
                     <h3>Category : {category}</h3>
                     <h3>Price : {price}</h3>
                     <p><h4>Description : {description}</h4>asda</p>
                 </div>
                </>)
            })}
        </div>
      
        </>
        )
    }

export default MenuCard;