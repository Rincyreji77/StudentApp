import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddStudent from './component/AddStudent';
import Searchstudent from './component/Searchstudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
 <BrowserRouter>
  <Routes>
    <Route path="/" exact element={<AddStudent/>}/>
    <Route path="/search" exact element={<Searchstudent/>}/>

  </Routes>
  </BrowserRouter>
   </div>
  );
}

export default App;
