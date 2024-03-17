
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>


    <Routes>


      <Route path='' element={<Signup/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
    

    </Routes>
     
    </>
  );
}

export default App;
