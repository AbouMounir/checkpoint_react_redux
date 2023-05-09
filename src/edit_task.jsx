import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux"; 
import { Link, useNavigate, useParams } from "react-router-dom";
import { editTask } from "./reducers/taskReducer";


function EditTask() {

    let {id} = useParams() ;
    
    const isdone_list = [ 'Is not done' , 'Is doing', 'Is done'];
    const [select,setIndex] = useState(
      Array(isdone_list.length).fill(false));
    const tasks = useSelector((state) => state.tasks);
    const this_task = tasks.filter(t => t.id == id.substring(1));
    const {description, isDone} = this_task[0];
    const [utask, setTask] = useState(description);
    const [MisDone, setDone] = useState(isDone);
    const [isdone_select, setIsdone_select] = useState('');
    
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(editTask({
          id : id.substring(1),
          description : utask,
          isDone : isdone_select
        }))
        navigate('/');  
    }


    const handleChange = (position) => {
      const upselect = select.map((item, index) => 
        index === position ? !item : item );
       setIndex(upselect)
       const se = upselect.findIndex(item => item == true)
       setIsdone_select(isdone_list[se])
       setDone(isdone_list[se])
    }
  
    return (
        <div className="edit_box">
          <form className="edit_form"  onSubmit={handleSubmit} >
            <input className="des_edit"  type="text" value={utask} onChange={e => setTask(e.target.value)}/>
            <div className="edit_isdone_box">
            {isdone_list.map((task, index) => {
                return (
                  <>
                    <div key={index} className='isdone_edit'>
                      <label > {task} </label>
                      <input type="checkbox" checked={task == MisDone ? true : false} name={task} id="" onChange={() => handleChange(index)} />
                    </div>
                  </>
                )
              })}
            </div>
            <button style={{backgroundColor:'red', color : 'white', height: '25px', padding: '5px', margin: '5px'}}> Edit Task </button>
          </form>
          <Link to='/' > Retour à l'acceuil </Link>
        </div>
    )
}

export default EditTask ;