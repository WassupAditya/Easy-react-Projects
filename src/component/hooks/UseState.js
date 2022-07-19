import React from "react";
import "./style.css";




const UseState= () => {
    // const [hover, setHover] = React.useState();
  // const initialData = 15;

  const [myNum, setMyNum] = React.useState(0);

//   UseEffect(() => {
//     document.title = `Chats(${myNum})`;
//   });

  

// onMouseOver={() => setMyNum(myNum + 1)}
  return (
    <>
    
      <div className="center_div">
        
        <p>{myNum}</p>
        <div class="button2"   onMouseOver={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onMouseOver={() => myNum >0 ? setMyNum(myNum - 1) : setMyNum(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECRE
        </div>
      </div>
    </>
  );
};

export default UseState;