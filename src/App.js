import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
