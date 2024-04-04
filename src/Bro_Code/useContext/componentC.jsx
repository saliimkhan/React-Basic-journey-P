import ComponentD from './componentD.jsx'

const componentC = (props) => {
  return (
    <div className="box">
    <h1> ComponentC</h1>

    <ComponentD  user={props.user}/>
    
   </div>  )
}

export default componentC