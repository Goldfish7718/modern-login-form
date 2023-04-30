import React, { useState } from 'react'
import './Login.scss'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../App'
import axios from 'axios';

const token = localStorage.getItem('token');

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const postLoginData = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        userName,
        password
      })

      localStorage.setItem('token', `Bearer ${res.data.token}`)
      navigate('/home')

    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <>
        <Navbar />
        <div className="login">
          <div className="login__container">
            <div className="login__title">
              <FontAwesomeIcon icon={faCrown} />
              <h3 className='login__heading'>THE SYNDICATE</h3>
            </div>

            <form className="login__form">
              <input onChange={e => setUserName(e.target.value)} type="text" className="login__input"  placeholder='Username'/><br />
              <input onChange={e => setPassword(e.target.value)} type="password" className="login__input" placeholder='Password'/><br />

              {error && <p className='login__error'>{error}</p>}

              <p className="login__tnc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate qui inventore saepe, tenetur nobis voluptatum eligendi corrupti error aperiam.</p>

              <button onClick={postLoginData} className="login__button btn-maroon">LOGIN <FontAwesomeIcon icon={faRightToBracket} className='login__icon' size='1x'/></button>
              <p className='login__signup'>Don't Have an account? <span onClick={() => navigate('/register')} className='login__signup-link'>Sign Up Now!</span></p>
            </form>
          </div>
        </div>
    </>
  )
}

export default Login