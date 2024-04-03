// useEffect(function,dependncies)

import React,{useState,useEffect} from 'react';

const use_Effect1 = () => {

    const [width,setwidth] = useState(window.innerWidth);
    const [height,setheight] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener("resize",handleResize);
        console.log("Event Listener will be added");

        // when no dependencies
        return() =>{
            window.removeEventListener("resize",handleResize);
        console.log("Event Listener will be Removed");
        }
    },[]);

    useEffect(()=>{
        document.title = `size: ${width} x ${height}`
    },[width,height])
    

    function handleResize (){
        setwidth(window.innerWidth)
        setheight(window.innerHeight)
    }

  return (
    <div>
        <h1>Window Width:{width}px</h1>
        <h1>Window height:{height}px</h1>

    </div>
  )

}

export default use_Effect1