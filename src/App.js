// import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import AllUser from './components/AllUser';
import KamleshSingh from './components/KamleshSingh';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<KamleshSingh/>} />
        <Route path='/all' element={<AllUser/>} />
        <Route path='/add' element={<AddUser/>} />
        <Route path='/edit/:id' element={<EditUser/>} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
