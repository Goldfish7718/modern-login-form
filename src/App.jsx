// Module Imports
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

// Views Import
import Login from './views/Login/Login.Jsx'
import Register from './views/Register/Register';
import Home from './views/Home/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
