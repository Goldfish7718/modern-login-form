import React from 'react'
import './Home.scss'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
        <Navbar />
        <main className="main">
          <FontAwesomeIcon icon={faCrown} size='8x' />
            <h1 className='main__heading'>THE SYNDICATE</h1>

            <div className="main__user-options">
                <button onClick={() => navigate('/login')} className="main__button">Login</button>
                <button onClick={() => navigate('/register')} className="main__button">Register</button>
            </div>
        </main>
    </>
  )
}

export default Home