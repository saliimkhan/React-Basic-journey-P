import React,{useState} from 'react'

const ColorPicker = () => {

const [color,setColor] = useState("#ffffff")
const HandleColorChange = (event)=>{
    setColor(event.target.value)
}
  return (
    <div className="color-picker-container">

      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color</label>
      <input type="color" value={color} onChange={HandleColorChange} />

    </div>
  )
}

export default ColorPicker




// const App = () => {

  
//   return (
//    <>
   
//    <ColorPicker />
   
//    </>
//   )
// }

// export default App



/* body{
    font-family: Arial, sans-serif;
}

.color-picker-container{
display: flex;
flex-direction: column;
align-items: center;
}

h1{
    margin :50px;
    font-size: 3rem;
}

.color-display{
    width: 300px;
    height: 300px;display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid hsl(0,0%,80%);
    border-radius: 25px;
    transition: 0.25s ease;
    margin-bottom: 25px;
    cursor: pointer;
}

.color-display p{
    font-size: 1.5rem;
    text-align: center;
    color: hsl(0,0%,20%);
    cursor: pointer;
}

label{
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: bold;
}

input[type="color"]{
width: 75px;
height: 50px;
padding: 5px;
border-radius:15px ;
border: 3px solid hsl(0,0%,80%);
} */