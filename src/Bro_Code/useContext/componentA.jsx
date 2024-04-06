/*
useContext() = React Hook that allows  you to share Values 
               between multiple levels of Components 
               without Passing props through each levels.
*/
/*
PROVIDER COMPONENT
1. import {createContext} from "reacr"
2. export const MyContext = createContext();
3. <MyContext.Provider value = {value}>
    <child />
    <MyContext/Provider>
*/

/*CONSUMER COMPONENT
1. import React,{useContext} from 'react';
   import {Mycontext} from "./ComponentA"
2. const value = useContext{MyContext}; 
*/


// props drilling is sharing props One to Last .

import React,{useState} from 'react'

import ComponentB from './componentB';



const componentA = () => {

    const [user,setUser] = useState("Salim")
   return (
    <div className='box'>
    <h1> ComponentA</h1>
    <h2>{`Hello ${user}`}</h2>
    <ComponentB  user={user}/>
    </div>
  )
}

export default componentA


// import ComponentA from './Bro_Code/useContext/componentA.jsx'

// const App = () => {

  
//   return (
//    <>
   
//   < ComponentA />
   
//    </>
//   )
// }

// export default App