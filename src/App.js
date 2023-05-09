import './App.css';
import Tasks from './tasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditTask from './edit_task';
import FilterTast from './filtertask';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tasks />}/>
          <Route path='/edit_task/:id' element={<EditTask  />} />
          <Route path='/filtertask' element={<FilterTast />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
