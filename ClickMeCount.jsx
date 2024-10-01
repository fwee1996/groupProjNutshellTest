// import { useState } from "react"

// export const App = () => {

  

//   // returns array with index 0 holding value of our state "stateVariable"and fn to set our state
//   //naming set--"whatever you name your state"
//   const [count, setCount]=useState(0) //{stateVariable, setterFunction}; 0 is initial value

// //let count=0

//   //instead of passing an anonymous fn like <button onClick={{}=>{}}>, declare it:
//   //console log every time it's clicked
//   const handleButtonClick= ()=>{

//     // count++
//     setCount(count+1)

//     //console.log("clicked!")

//     console.log(count) //console.log works but Count: 0 don't change bcs haven't rerendered html dispatch custom event 
//     //and eventlistener to alert state change to rerender html
//   }
//   // return <div className="welcome">Welcome to your first React Application!</div>
//   //rmbr return ()
//   //return (<div><h1>Hello!</h1><div>This is amazing!</div></div>) or:
//   // <> and </> empty works below too!
//   // <button onClick={{handleButtonClick}}> pass the fn instead of invoking it ()
//   //it is only invoked when the button is clicked
//   //to display our state within the JSX, we simply wrap it with curly braces:{count}
//   return (
//     <>
//       <h1>Hello!</h1>
//       <div>This is amazing!</div>
//       <button className="btn-secondary" onClick={handleButtonClick}>Click Me!</button>  
//       <div>Count: {count} </div>    
//     </>
//   )
// }