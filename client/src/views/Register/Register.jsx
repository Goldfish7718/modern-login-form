import React from 'react'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import './Register.scss'

const Register = () => {
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
            <input type="text" className='register__input' placeholder='First Name' />
            <input type="text" className='register__input' placeholder='Last Name' />
          </div>

          <input type="text" className="register__input" placeholder='Username' />
          <input type="password" className="register__input" placeholder='Password' /><br />

          <p className="register__tnc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore cum, ut distinctio atque commodi nihil eligendi incidunt debitis a temporibus?</p>
            
          <button className='register__button btn-maroon'>Sign Up! <FontAwesomeIcon icon={faRightToBracket} /></button>
        </div>
      </div>
    </>
  )
}

export default Register