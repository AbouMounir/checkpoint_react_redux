import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "../tasklist";



const taksSlice = createSlice({
  name : "taks",
  initialState : taskList,
  reducers : {
     addTask : (state, action) => {
      state.push(action.payload);
     },
     editTask : (state, action) => {
      const {id, description, isDone} = action.payload;
      const ft = state.find(t => t.id == id);
      if (ft) {
        ft.description = description ;
        ft.isDone = isDone ;
      }
     },
     deleteTask : (state, action) => {
      const {id} = action.payload ;
      if (id) {
        return state.filter(t => t.id != id);
      } 
     },
     filterTast : (state, action) => {
      const {isDone} = action.payload ;
      if (isDone != '') {
        return state.filter(t => t.isDone.includes(isDone));
      } 
    },
    deleteDoneTask : (state, action) => { 
      return state.filter((item) => 
          item.isDone != 'Is done'
      )
    },
    deleteAllTask : (state, action) => {
      return state.filter((item) => item.id == '');
    }
  }
});


export  const {addTask, editTask, deleteTask, filterTast, deleteDoneTask, deleteAllTask} = taksSlice.actions ;
export default taksSlice.reducer;