import React from 'react'
import './Login.scss'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  return (
    <>
        <Navbar />
        <div className="login">
          <div className="login__title">
            <FontAwesomeIcon icon={faCrown} />
            <h3 className='login__heading'>THE SYNDICATE</h3>
          </div>

          <form className="login__form">
            <input type="text" className="login__input"  placeholder='Username'/><br />
            <input type="text" className="login__input" placeholder='Password'/><br />

            <p className="login__tnc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate qui inventore saepe, tenetur nobis voluptatum eligendi corrupti error aperiam.</p>

            <button className="login__button btn-maroon">LOGIN <FontAwesomeIcon icon={faRightToBracket} className='login__icon' size='1x'/></button>

            <p className='login__signup'>Don't Have an account? <span onClick={() => navigate('/register')} className='login__signup-link'>Sign Up Now!</span></p>
          </form>
        </div>
    </>
  )
}

export default Login