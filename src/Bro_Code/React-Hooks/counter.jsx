/*
updater Function = A function passed as an argument to setState() usually
                   Ex:- setYear(y => y+1)
                   Allow for safe updates based on the previous state 
                   Used with multiple state updates and asynchronous functions 
                   Good practice to use updater functions 

*/

/*
// use of updater function (* => *+1)
Uses the current state to calculate the NEXT state
set functions do not trigger an UPDATE
React batches together state updates for performance reasons.
NEXT state becomes the CURRENT state after an update
*/

/*
takes the PENDING state to calculate NEXT state.
React puts your updater func in a queue (waiting in line)
During  the next render , it will call them in a same order.
*/



import React,{useState} from 'react';

const counter = () => {
    // js here

const [count,setCount] = useState(0)

// const Increment = ()=>{
//     setCount(count+1)
// } 

// use of updater function (* => *+1)
const Increment = ()=>{
  setCount(c => c+1)
  setCount(c => c+1)
} 



const Decrement = ()=>{
    setCount(count-1)
} 

// use of updater function (* => *-1)
// const Decrement = ()=>{
//   setCount(count => count-1)
// } 

const Reset = ()=>{
    setCount(0)
}



  return (
    <>
    
    <h1> Count: {count}</h1>
    <br />
    <br />
    <button onClick={Increment}>Increment</button>
    <br />
    <br />
     <button onClick={Reset}>Reset</button>
    <br />
    <br />
    <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default counter