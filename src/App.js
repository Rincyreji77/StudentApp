import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddStudent from './component/AddStudent';
import Searchstudent from './component/Searchstudent';

function App() {
  return (
   <div>
     <AddStudent/>
     <Searchstudent/>
   </div>
  );
}

export default App;
