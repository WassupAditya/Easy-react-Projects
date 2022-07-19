import React from 'react'
import './style.css'
import Menu from './menuApi.js'
import MenuCard from './MenuCard'
import Navbar from './navbar'
//those 3 dots are called as spread opprator  
const UniqueList  = [...new Set(Menu.map((curElem)=>{
  return curElem.category ;
})
),
"All", 
]
console.log(UniqueList)
const Restaurant = () => {

 const [menuData , setMenuData] =   React.useState(Menu)
const [menuList , setMenuList]  = React.useState(UniqueList)
const filterItem = (category) =>{

  if (category === "All") {
    setMenuData(Menu);
    return ;
  }  

  const UpdatedList = Menu.filter((currElem) =>{
    return currElem.category === category ; 
  }) ;
  setMenuData(UpdatedList);
};
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
   <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant