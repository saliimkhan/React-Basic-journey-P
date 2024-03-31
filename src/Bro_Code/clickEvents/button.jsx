/* 
 click events = An interaction  when a user clicks on a specific element .
               We can respond to clicks by passing
               a callback to the onClick event handler.
*/
// import React,{useState} from 'react'

const Button = () => {

  
// 1
  // const [name,setName] = useState("click me 🙂💔")
  // const handleClick = (name)=> console.log(`${name} stop clicking me`)
  //  e.target.textContent = "oouch!"
  // console.log("Oouch!")
  // {
  //   const setName = "Oouch 🐧"
  // }

  // 2
  // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

// 3
// let count = 0;
//   const handleClick3 = (name) =>{
//   if(count < 3){
//     count++;
//     console.log(`${name} u clicked me ${count} times`);
//   }
//   else{
//     console.log(`${name} stop clicking me`);
//   }
//   }

// 4
const handleClick4 = (e) => e.target.textContent = "hello"
  return (
    // <button onClick={() => handleClick2("salim")}>Click me</button>
    // <button onClick={() => handleClick3("salim")}>Click me</button>
    <button onClick={(e) => handleClick4(e)}>Click me</button>

  )

}

export default Button


// const App = () => {

  
//   return (
//    <>
   
//    <Button />
   
//    </>
//   )
// }

// export default App