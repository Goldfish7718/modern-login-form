// Module Imports
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

// Views Import
import Login from './views/Login/Login'
import Register from './views/Register/Register';
import Home from './views/Home/Home'
import Landing from './views/Landing/Landing';
import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token ? token : null;

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Landing />} />
    </Routes>
  )
}

export default App
