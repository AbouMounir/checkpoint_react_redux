import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AddTask from "./addtask";
import FilterTast from "./filtertask";
import { deleteAllTask, deleteDoneTask, deleteTask } from "./reducers/taskReducer";


function Tasks() {
 
  const tasks = useSelector((state) => state.tasks);
  const del = tasks.filter((item) => item.isDone == "Is done");
  const del_isdone = del.map((item) => item.id);

  const dispatch = useDispatch();


    const handleDelete = (id) => {
       dispatch(deleteTask({id : id}))
    }

    const handleDeleteDone = () => {
      dispatch(deleteDoneTask())
    };

    const handleDeleteAll = () => {
      dispatch(deleteAllTask())
    }

    return (
       <div className="container">
          <AddTask />
          <div className="delete_box">
             <FilterTast />
             <div className="delete_taks">
              <button style={{backgroundColor:'red', color : 'white',padding:'5px'}} onClick={handleDeleteDone}> Delete done taks </button>
              <button style={{backgroundColor:'red', color : 'white',padding:'5px'}} onClick={handleDeleteAll}> Delete all taks </button>
             </div>
          </div>
          <table>
            <thead>
                <tr>
                     <th> Id </th>
                     <th> Description </th>
                     <th> isDone </th>
                     <th> Action </th>
                </tr>
            </thead>
            <tbody>
            {tasks.map((task,index) => {
                return(
                <tr key={index}>
                    <td> {task.id} </td>
                    <td> {task.description} </td>
                    <td> {task.isDone} </td>
                    <td className="actions">
                      <button style={{backgroundColor:'red', color : 'white'}} onClick={() => handleDelete(task.id)}> Delete </button>
                      <Link to={`/edit_task/:${task.id}`}> 
                        <button style={{backgroundColor:'blue', color : 'white'}}> Edit </button> 
                      </Link>
                    </td>
                </tr>
                )    
            })}
            </tbody>
          </table>
       </div>
    )};


export default Tasks;