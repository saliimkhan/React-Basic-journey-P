// useState() = Re- renders the component  when the state value changes.

/* useRef()  = "use Reference" Does not cause  re-renders when its value changes .
               When you want a component to "remembers" some information
               but y dont want that information to triggers new renders.

               1.Accessing/Interacting with DOM elements
               2.Handling Focus , Animation and Transitions.
               3.Managing Timers and Intervals
 */

               import React,{useState,useEffect,useRef} from 'react'
               
               const MyComponent = () => {
            //   const [numbers, setnumbers] = useState(0); //Instead of useState we use useRef

        //  const ref = useRef(0);
            // console.log(ref);

            // const inpuRef = useRef(null);

            const inpuRef1 = useRef(null);
            const inpuRef2 = useRef(null);
            const inpuRef3 = useRef(null);

            

          useEffect(() =>{
            console.log("Component Rendered");
          })

            //   function HandleClick (){
            //     // setnumbers(n => n+1)

            //     // ref.current++;
            //     // console.log(ref.current);

            //     inpuRef.current.focus();
            //     inpuRef.current.style.backgroundColor = "yellow"
            //   }

            function HandleClick1 (){
                
                inpuRef1.current.focus();
                inpuRef1.current.style.backgroundColor = "yellow"
                inpuRef2.current.style.backgroundColor = ""
                inpuRef3.current.style.backgroundColor = ""
              }

              function HandleClick2 (){
                
                inpuRef2.current.focus();
                inpuRef1.current.style.backgroundColor = ""
                inpuRef2.current.style.backgroundColor = "yellow"
                inpuRef3.current.style.backgroundColor = ""
              }

              function HandleClick3 (){
                

                inpuRef3.current.focus();
                inpuRef1.current.style.backgroundColor = ""
                inpuRef2.current.style.backgroundColor = ""
                inpuRef3.current.style.backgroundColor = "yellow"
              }

                 return (
                   <div>
                   {/* <button onClick={HandleClick}>Click me!</button>
                    <input ref={inpuRef} /> */}
                    <br />
                    <button onClick={HandleClick1}>Click me1!</button>
                    <input ref={inpuRef1} />
                    <br />
                    <button onClick={HandleClick2}>Click me2!</button>
                    <input ref={inpuRef2} />
                    <br />
                    <button onClick={HandleClick3}>Click me3!</button>
                    <input ref={inpuRef3} />
                   </div>
                 )
               }
               
               export default MyComponent