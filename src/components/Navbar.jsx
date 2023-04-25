import React from 'react'
import './Navbar.scss';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {

    const navigate = useNavigate();

    const darkStyles = {
        backgroundColor: 'black',
        color: 'white'
    }

  return (
    <>
        <nav className="navbar" style={props.mode === 'dark' ? darkStyles : null}>
            <div className="navbar__title">
                <h1 onClick={() => navigate('/')}>THE SYNDICATE <FontAwesomeIcon icon={faCrown} /></h1>
            </div>

            <ul className="navbar__links">
                <li className="navbar__link-item">About Us</li>
                <li className="navbar__link-item">Contact Us</li>
                <li className="navbar__link-item">Account</li>
            </ul>
        </nav>
    </>
 )
}

export default Navbar