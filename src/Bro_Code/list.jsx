
import PropTypes from 'prop-types'
const list = (props) => {
//     const fruits = ['Apple','Banana','Grapes','WaterMelon'];
//     const listFruitItem = fruits.map(fruit => <li>{fruit}</li>)
//   return (  <ol className="mx-2"> {listFruitItem}</ol> )


const listItems = props.items;
const itemLists = listItems.map((item)=> <li key={item.id}>
                                             {item.name} &nbsp;
                                             {item.calories}
                                            </li>)

return(<ol> {itemLists}</ol>)
}

list.propTypes = {
     id:PropTypes.number,
    name: PropTypes.string,
    calories:PropTypes.number
}

list.defaultProps = {
    id:0,
  name : "Guest",
  calories:0
}

export default list


// const App = () => {

//   const fruits =[{id:1, name:'Apple', calories:150},
//                  {id:2, name:'Banana', calories:250},
//                  {id:3, name:'grapes', calories:90},
//                  {id:4, name:'papaya', calories:100},
//                  {id:5}];
//   return (
//    <>
   
//    <List items={fruits} category="fruits" />
   
//    </>
//   )
// }