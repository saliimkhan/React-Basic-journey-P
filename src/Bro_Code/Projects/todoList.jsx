import React,{useState} from 'react'
import { M } from 'vite/dist/node/types.d-aGj9QkWt';

const todoList = () => {

   const[tasks,setTasks] = useState(["Eats BreakFast","Take a Shower","Take a Chill Pill"])
   const[newTasks,setNewtasks] = useState("");

   function HandleInputChange (event){
    setNewtasks(event.target.value)
   }

   function addTask (){
    if(newTasks.trim() !== "")
    setTasks(t =>[...t,newTasks])
    setNewtasks("")
   }

   function deleteTask (index){
  //  const deleteTask = tasks.filter((_,i) => i !== index);
  //  setTasks(deleteTask)
  //  }

   function moveTaskUp (index){
 
    // if(index > 0){
    //   const moveTask = [...tasks];
    //   [moveTask[index],moveTask[index-1]] = [moveTask[index-1],moveTask[index]];
    //   setTasks(moveTask);
    // }

   }

   function moveTaskDown (index){

    // if(index < tasks.length -1){
    //   const downTask = [...tasks];
    //   [downTask[index],downTask[index+1]] = [downTask[index+1],downTask[index]];
    //   setTasks(downTask);
    // }

   }

  return (
    <div className='to-do-list'>
        <h1 >To-Do-List</h1>

       <div>
       <input type="text" placeholder='Enter a Task' value={newTasks}  onChange={HandleInputChange} />
       <button className='add-button' onClick={addTask}>Add</button>
       </div>

       <ol>
        {tasks.map((task,index)=>
        <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>❌</button>
            <button className='move-button' onClick={() => moveTaskUp(index)}>👆</button>
            <button className='move-button' onClick={() => moveTaskDown(index)}>👇</button>
        </li>
        )}
       </ol>

    </div>
  )
}
}

export default todoList;