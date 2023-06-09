import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>  

        <Route path='/' element={< Home />} />
        <Route path='all' element={< AllUser />} />
        <Route path='/add' element={< AddUser />} />
        <Route path='/edit/:id' element = {< EditUser/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
