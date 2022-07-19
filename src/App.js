// import React from 'react'

// // can return only one thing 
// // called as JSX 
// // below is normal ecma script 
// const App = () => {
//   return (
//     <>
//     <MyName/>
//       <h1 className='p'>hello mf </h1>
//     </>
//   );
// } ;

// // creating new component 

// const MyName = () => {
  
//   return <h1>Aditya Anil Patil</h1>
// }

// export default App


//Restaurant app

import React from 'react'
// import Restaurant from './component/Basics/Restaurant'
// import UseState from './component/hooks/UseState'
// import UseEffect from './component/hooks/useEffect'
// import UseReducer from './component/hooks/useReducer'
// import Todo from './component/todoReact/todo'
import Temp from './component/weather/temp'
const App = () => {
  // return <Restaurant/>
  // return <UseState/>
  // return <UseEffect/>
  //  return <UseReducer/>
  //  return <Todo/>
   return <Temp/>

}

export default App