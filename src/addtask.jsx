import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./reducers/taskReducer";



function AddTask() {

    const isdone_list = [ 'Is not done' , 'Is doing', 'Is done'];
    const [task, setTask] = useState('');
    const tasks = useSelector((state) => state.tasks);
    const [select,setIndex] = useState(
      Array(isdone_list.length).fill(false)
    );
    const [isdone_select, setIsdone_select] = useState('');

    const dispatch = useDispatch();

    const handleChange = (position) => {
       const upselect = select.map((item, index) => 
        index === position ? !item : item 
       );
       setIndex(upselect)
       const se = upselect.findIndex(item => item == true)
       setIsdone_select(isdone_list[se])
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({id : tasks.length + 1 , description : task , isDone : isdone_select}));
    }

  
    return (
        <form className="add_from" onSubmit={handleSubmit} >
          <input className="input_des" type="text" placeholder="description de la tache" onChange={e => setTask(e.target.value)} />
          <div className="isdone_box">
              {isdone_list.map((task, index) => {
                return (
                  <>
                    <div key={index} className='isdone'>
                      <label > {task} </label>
                      <input type="checkbox" name={task} id="" onChange={() => handleChange(index)} />
                    </div>
                  </>
                )
              })}
          </div>
          <button style={{backgroundColor:'green', color : 'white'}} className="add"> Add Task </button>
        </form>
    )
}

export default AddTask ;