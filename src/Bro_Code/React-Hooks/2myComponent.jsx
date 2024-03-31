import React,{useState} from 'react'

const myComponent = () => {

    const [car,setCar] = useState({year:2024,
                                   make:"Ford",
                                   model:"mustang"})

  const HandleYearChange = (event)=>{
     setCar(car => ({...car,year:event.target.value}))
  }

  const HandleMakeChange = (event)=>{
    setCar(car => ({...car,make:event.target.value}))
  }

  const HandleModelChange = (event)=>{
    setCar(car => ({...car,model:event.target.value}))
  }
                                   

  return (
    <div>

    <p>your favourite Car is {car.year} {car.make} {car.model}</p>
    <br />
    <input type="number" value={car.year}  onChange={HandleYearChange}/>
    <br />
    <input type="text" value={car.make} onChange={HandleMakeChange}/>
    <br />
    <input type="text" value={car.model} onChange={HandleModelChange} />

    </div>
  )
}

export default myComponent



// const App = () => {

  
//   return (
//    <>
   
//    <MyComponent2 />
   
//    </>
//   )
// }

// export default App