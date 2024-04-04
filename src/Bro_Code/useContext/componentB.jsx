import ComponentC from './componentC.jsx'

const componentB = (props) => {
  return (
   <div className="box">
    <h1> ComponentB</h1>
<ComponentC user={props.user} />
   </div>
  )
}

export default componentB