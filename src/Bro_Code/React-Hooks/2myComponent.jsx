// import React,{useState} from 'react'

// const myComponent = () => {

//     const [car,setCar] = useState({year:2024,
//                                    make:"Ford",
//                                    model:"mustang"})

//   const HandleYearChange = (event)=>{
//      setCar(car => ({...car,year:event.target.value}))
//   }

//   const HandleMakeChange = (event)=>{
//     setCar(car => ({...car,make:event.target.value}))
//   }

//   const HandleModelChange = (event)=>{
//     setCar(car => ({...car,model:event.target.value}))
//   }
                                   

//   return (
//     <div>

//     <p>your favourite Car is {car.year} {car.make} {car.model}</p>
//     <br />
//     <input type="number" value={car.year}  onChange={HandleYearChange}/>
//     <br />
//     <input type="text" value={car.make} onChange={HandleMakeChange}/>
//     <br />
//     <input type="text" value={car.model} onChange={HandleModelChange} />

//     </div>
//   )
// }

// export default myComponent



// const App = () => {

  
//   return (
//    <>
   
//    <MyComponent2 />
   
//    </>
//   )
// }

// export default App



import React,{useState} from 'react'

const myComponent = () => {

    const [cars,setCars] = useState([])
    const [carYear,setCarYear] = useState(new Date().getFullYear())
    const [carMake,setCarMake] = useState("")
    const [carModel,setCarModel] = useState("")
   

    function HandleAddCar (){
       const newCar = {
                        year:carYear,
                        make:carMake,
                        model:carModel
                      };

                      setCars(c => [...c,newCar])
    }


function HandleRemoveCar (index){
setCars(cars.filter((_,i) => i!== index))
}

  const HandleYearChange = (event)=>{
    
     setCarYear(event.target.value)
  }

  const HandleMakeChange = (event)=>{
    setCarMake( event.target.value)
    // document.getElementById('makeInput').value = ""
  }

  const HandleModelChange = (event)=>{
    setCarModel(event.target.value)
  }
                                   

  return (
    <div>

    <h2>List of Car Objects</h2>
    <br />

    <ol>
     {cars.map((car,index) => 
     <li key={index} onClick={() =>HandleRemoveCar(index)}>
      {car.year} &nbsp;
      {car.make}  &nbsp;
      {car.model}
     </li>)}
    </ol>

    <br />
    <input type="number" value={carYear}  onChange={HandleYearChange} /> <br />
    <input type="text" id='makeInput' placeholder='Enter Car Make' value={carMake} onChange={HandleMakeChange} /> <br />  
    <input type="text"  id='modelInput' placeholder='Enter Car Model' value={carModel} onChange={HandleModelChange} />
    <br /><br />
    <button onClick={HandleAddCar}>Add Car</button>
    

    
    </div>
  )
}

export default myComponent