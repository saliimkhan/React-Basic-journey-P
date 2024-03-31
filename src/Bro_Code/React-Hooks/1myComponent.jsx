 /*
React hook = special  function that allows functional components 
             to use React features without writing class components (React v16.8) 
             (useState,useEffect,useContext,useReducer,useCallback,and more...)

        
useState() = a React hook that allows the creation  of a stateful variable 
             AND a setter function to update  its value in the  virtual Dom.
             [name,setName]            
 */      


import React,{useState} from "react";
             

             
             const myComponent = () => {

                
                const [name, setName] = useState("Guest")
                const [age, setAge] = useState(0)
                const [IsEmployed, setIsEmployed] = useState(false)

                const updateName = ()=>{
                    setName("salim")
                }

                const updateAge = ()=>{
                    setAge(age+1)
                }

                const ImployedStatus = ()=>{
                    setIsEmployed(!IsEmployed)
                }

               return (
                 <>
                 <p>Name:{name}</p>
                 <button onClick={updateName} >setName</button>
                 <br />
                 <p>Age:{age}</p>
                 <button onClick={updateAge} >incrementAge</button>
                 <br />
                 <p>status:{IsEmployed ? "yes" : "no"}</p>
                 <button onClick={ImployedStatus} >updateStatus</button>
                 



                 </>
               )
             }
             
             export default myComponent

            //  const App = () => {

  
            //     return (
            //      <>
                 
            //      <MyComponent />
                 
            //      </>
            //     )
            //   }
              
            //   export default App