import React from "react";
import "./style.css";


const reducer  = (state , action) => {
    if(action.type === "INCR"){
        state = state + 1 ; 
    }
    if(state>0 && action.type === "DECR"){
        state = state - 1 ; 
    }
    
        return state ; 
    
};

const UseReducer= () => {
    // const [hover, setHover] = React.useState();
  const initialData = 10;

//   const [myNum, setMyNum] = React.useState(0);

const [state , dispatch] = React.useReducer(reducer , initialData);

//   UseEffect(() => {
//     document.title = `Chats(${myNum})`;
//   });

  

// onMouseOver={() => setMyNum(myNum + 1)}
  return (
    <>
    
      <div className="center_div">
        
        <p>{state}</p>
        <div class="button2"   onMouseOver={() => dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onMouseOver={() => dispatch({type:"DECR"})}>
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

export default UseReducer;