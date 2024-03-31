/*
onChnage = event handler used primarily  with form  elements 
           ex. <input> , <textarea> ,<select>, <radio> 
           triggers a function every time the value of the input changes.

*/

import React,{useState} from 'react'

const onChange = () => {

  const [name,setName] = useState("Guest")
  const [quantity,setQuantity] = useState(0)
  const [comment,setComment] = useState("")
  const[payment,setPayment] = useState("")
  const [shipping,setShipping] = useState("")

  const hndleChange = (event)=>{
     setName(event.target.value)
  }

  const hndleQuantityChange = (event)=>{
    setQuantity(event.target.value)
  }

  const hndleCommentChange = (event)=>{
    setComment(event.target.value)
  }

  const hndlePaymentChange = (event)=>{
    setPayment(event.target.value)
  }

  const hndleShippingChange = (event)=>{
    setShipping(event.target.value)
  }


  return (
    <div>
      
      <input value={name} onChange={hndleChange}/>
      <p>Name: {name}</p>
      <br />
      <br />
      <input  type="number" value={quantity} onChange={hndleQuantityChange} />
      <p>quantity:{quantity}</p>
      <br />
      <br />
      <textarea value={comment} onChange={hndleCommentChange} placeholder='Enter Delivery Instruction'></textarea>
      <p>Comment: {comment}</p>
      <br />
      <br />
      <select value={payment} onChange={hndlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="RupayCard">RupayCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment:{payment}</p>
      <br />
      <br />
      <label>
        <input type="radio"  value="Delivery " checked={shipping === "Delivery"} onChange={hndleShippingChange}/>
        Delivery
      </label>
      <br />
      <label>
        <input type="radio"  value="Pick UP" checked={shipping === "Pick UP"} onChange={hndleShippingChange}/>
        Pick up
      </label>
      
      
      <p>Shipping:{shipping}</p>
    </div>
  )
}

export default onChange

// const App = () => {

  
//   return (
//    <>
   
//    <OnChange />
   
//    </>
//   )
// }

// export default App