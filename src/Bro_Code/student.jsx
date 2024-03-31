//  props = read-only properties that are  shared between components.
//          A parent component  can send data to  a child component.
//           <Component key = value />
//                      OR
// proTypes =  a mechanism that ensures that the  passed value 
//            is of correct dataTypes
//            age: propTypes.number

// defaultProps = default values for props in case they are not
//                passed from the component 
//                name:"Guset" 


import PropTypes from 'prop-types'

const student = (props) => {
  return (
          <div className="w-80 h-40 bg-slate-300 border-4">
         
         <p>Name: {props.name}</p> 
          <p>Age: {props.age}</p>
          <p>Student: {props.isStudent ? "Yes" : "No"}</p>

          </div>
 )
}

student.propTypes = {
 
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

student.defaultProps = {
  name : "Guest",
  age:0,
  isStudent:false
}

export default student