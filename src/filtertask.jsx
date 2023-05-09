import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { filterTast } from "./reducers/taskReducer";


const FilterTast = () => {

    const [filter, setFilter] = useState(false);
    const [select,setIndex] = useState('Is not done');
    const dispatch = useDispatch();
    

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(filterTast({isDone : select}))
      setFilter(!filter);
    } 


    return(
        <>
          <form className="filter_form" action="" onSubmit={handleSubmit}>
              <input className="btn" type="submit" value='Filter' style={{backgroundColor:'black', width:'45px'}} />
              <select name="" id="" value={select} onChange={e => setIndex(e.target.value)}>
                 <option value=""> All </option>
                 <option value="Is not done"> Is not done </option>
                 <option value="Is doing"> Is doing </option>
                 <option value="Is done"> Is done </option>
              </select>
          </form>
           
        </>
    )};


export default FilterTast;