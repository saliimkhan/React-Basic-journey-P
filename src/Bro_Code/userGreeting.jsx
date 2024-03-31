// conditional rendering = allows you to control what gets rendered
//                         in your application based on certain conditions
//                         (show,hide, or change components)

import PropTypes from 'prop-types'
const userGreeting = (props) => {
    // const user1 = `welcome ${props.username}`;
    // const user2 = "please logged in first"
    return(props.isloggedin ? <h2><h2>welcome {props.username}</h2></h2> :<h2>login first</h2>)
  
}


userGreeting.propTypes = {
 
  isloggedin:PropTypes.bool,
  username: PropTypes.string,
  
}

userGreeting.defaultProps = {
username : "Guest",

}
export default userGreeting