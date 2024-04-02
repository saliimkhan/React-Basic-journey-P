import React,{useState} from 'react'

const myComponent = () => {

    const [foods,setFoods] = useState(["Apple", "Banana", "Coconut", "Orange"])

function HandleAddFood (){
    const newFood = document.getElementById("foodInput").value ;
    document.getElementById("foodInput").value = "";

    setFoods(f => [...f,newFood])
}

function HandleRemoveFood  (index){
   
    setFoods(foods.filter((_,i) => i !== index))
}
   return(
    <>

    
    <h2>List Of Foods</h2>

    <ol>
    {foods.map((food,index) => <li key={index} onClick={() =>HandleRemoveFood(index)}>{food}</li>)}
    </ol>

<input type="text" placeholder='Enter a Food Name' id='foodInput'  />
<button onClick={HandleAddFood}>Add</button>
    
    </>

   )
   
}

export default myComponent


// const App = () => {

  
//     return (
//      <>
     
//     <MyComponent3 />
     
//      </>
//     )
//   }
  
//   export default App