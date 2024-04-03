/*
useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
              This Component re-renders 
              This component mounts 
              This state of a value

useEffect(function,[dependencies])

1.useEffect(() => {})            Runs after every re-renders
2.useEffect(() => {}, [])        Runs only on mount
3.useEffect(() => {}, [value])   Runs on mount + when value changes

USES
#1 Event Listeners
#2 DOM manipulation
#3 Subscriptions (real-time-updates)
#4 Fetching Data  from an API
#5 Clean up  whan a component unmounts

*/


import React,{useState,useEffect} from 'react'

const use_Effect = () => {

  const [count,setCount] = useState(1);
  const [color,setColor] = useState('green');

  useEffect(()=>{
    document.title = `count: ${count} ${color}`
  },[count,color])


  const counter = () =>{
    setCount(c => c+1)
  }

  const subStract = () =>{
    setCount(c => c-1)
  }

  const colorChange = () =>{
    // if(counter){
    //   setColor(c => c === "green")
    // }
    // else if(subStract){
    //   setColor(c => c === "red") 
    // }
    setColor(c => c === "green" ? "red" : "green")
  }
  

  return (
    <div>

    <h1 style={{color:color}}>Count:{count}</h1>
    <button onClick={counter}>Add</button>
    &nbsp; &nbsp; &nbsp;
    <button onClick={subStract}>subStract</button>
    <br /> <br />
    <button onClick={colorChange}>Change Color</button>
    </div>
  )
}

export default use_Effect






// import UseEffect from './Bro_Code/useEffect/use_Effect.jsx'

// const App = () => {

  
//   return (
//    <>
   
//   <UseEffect />
   
//    </>
//   )
// }

// export default App
