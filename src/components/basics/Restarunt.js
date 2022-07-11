import React, { useState } from 'react'; 
import Menu from './menuApi';
import MenuCard from '../menuCard';
import Menubar from './Menubar';

const uniqueList = [...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),"All"];
const Restarunt = () => {
    const [menuData,setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList);
    
    const filterData = (category)=>{
        if(category == 'All'){
            setMenuData(Menu);
            return;
          }

        const updatedMenu = Menu.filter((curElem)=>{
            return curElem.category == category;
        });
        setMenuData(updatedMenu);
    }
  return (
    <>
        <Menubar filterData={filterData} menuList={menuList} />
        <MenuCard menuData = {menuData}/>
    </>
  )
}

export default Restarunt;