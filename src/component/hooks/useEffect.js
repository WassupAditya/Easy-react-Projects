import React from "react";
import { useEffect } from "react";
import "./style.css";

// PAGE WAT KAHI JARI CHANGE KARAYACHA ASEL TAR HE USE KARA


const UseEffect= () => {
    // const [hover, setHover] = React.UseEffect();
  // const initialData = 15;

  const [myNum, setMyNum] = React.useState(0);

 React.useEffect(() => {
  document.title = `Chats(${myNum})`
 }) ; 
 

  

// onMouseOver={() => setMyNum(myNum + 1)}
  return (
    <>
    
      <div className="center_div">
        
        <p>{myNum}</p>
        <div className="button2"   onMouseOver={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
       
      </div>
    </>
  );
};

export default UseEffect;