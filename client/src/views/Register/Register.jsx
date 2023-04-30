import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import './Register.scss'
import { API_URL } from '../../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const postSignupData = async e => {
    try {
      const res = await axios.post(`${API_URL}/auth/signup`, {
        firstName,
        lastName,
        userName,
        password
      })

      const token =  `Bearer ${res.data.token}`;
      localStorage.setItem('token', token)
      navigate('/home')
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <>
      <Navbar mode='dark' />
      <div className="register">
        <div className="register__form">
          <div className="register__title">
            <FontAwesomeIcon icon={faCrown} size='3x' />
            <h1 className='register__heading'>THE SYNDICATE</h1>
          </div>  

          <div className="register__name-inputs">
            <input onChange={e => setFirstName(e.target.value)} type="text" className='register__input' placeholder='First Name' />
            <input onChange={e => setLastName(e.target.value)} type="text" className='register__input' placeholder='Last Name' />
          </div>

          <input onChange={e => setUserName(e.target.value)} type="text" className="register__input" placeholder='Username' />
          <input onChange={e => setPassword(e.target.value)} type="password" className="register__input" placeholder='Password' /><br />

          {error && <p className='register__error'>{error}</p>}

          <p className="register__tnc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore cum, ut distinctio atque commodi nihil eligendi incidunt debitis a temporibus?</p>
            
          <button className='register__button btn-maroon' onClick={postSignupData}>Sign Up! <FontAwesomeIcon icon={faRightToBracket} /></button>
        </div>
      </div>
    </>
  )
}

export default Register