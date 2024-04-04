import React,{useState,useEffect} from 'react'

const DigitalClock = () => {
    // javaScript Here
    const[time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000);

        return () => {
            const stopIntervalId = clearInterval(intervalId )
        }
    }
    
    
    ,[]);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        const meridiem = hours >= 12 ? "PM" : "AM"
        
        hours = hours % 12 || 12 ;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero (number){
        return(number < 10 ? "0" : "") + number
    }


  return (
    <div className='clock-container'>
        <div className='clock'>
    
        <span>{formatTime()}</span>
       
        </div>
        </div>
  )
}

export default DigitalClock


/*
import DigitalClock from './Bro_Code/Projects/DigitalClock.jsx'

const App = () => {

  
  return (
   <>
   
  <DigitalClock />
   
   </>
  )
}

export default App

*/