import React,{useState} from 'react'
import "./style.css";
import Menu from './menuApi';
import Menucard from './Menucard'



const uniquelist = [
  ...new Set(
  Menu.map((curElem)=>{
  return curElem.category;
  })
  ),
  ]


const Resturant = () => {
        
    const[menuData,setMenuData] = useState(Menu);
     

    const filterItem = (category) =>{
      const updatedList = Menu.filter((curElem)=>{
         return curElem.category === category;
      });
      setMenuData(updatedList);
    };    

  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
      <button className="btn-group__item" onClick={() =>filterItem("breakfast")}>Breakfast</button>
      <button className="btn-group__item"onClick={() =>filterItem("lunch")}>lunch</button>
      <button className="btn-group__item"onClick={() =>filterItem("dinner")}>Dinner</button>
      <button className="btn-group__item"onClick={() =>setMenuData(Menu)}>all</button>
      </div>
    </nav>
      <Menucard menuData={menuData}/>
    </>
  )
}

export default Resturant