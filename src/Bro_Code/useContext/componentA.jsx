/*
useContext() = React Hook that allows  you to share Values 
               between multiple levels of Components 
               without Passing props through each levels.
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