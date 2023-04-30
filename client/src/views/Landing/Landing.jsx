import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import './Landing.scss';
import axios from 'axios';
import { API_URL } from '../../App';
import { useNavigate } from 'react-router-dom';

const Landing = () => {

    const [decode, setDecode] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const requestVerification = async () => {
        try {
            const token = localStorage.getItem('token');

            if (!token) return navigate('/login');

            const res = await axios.get(`${API_URL}/auth/verify`, {
                headers: {
                    Authorization: token
                    }
            })         
            setDecode(res.data.decode);
            console.log(res.data.decode);
        } catch (err) {
            console.log(err.response.status);

            if (err.response.status === 400 || err.response.status === 500)
                setError(err.response.data.message)
        }
    }

    const logout = async e => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/login');
    }

    const {
        firstName,
        lastName,
        userName
    } = decode;

    useEffect(() => {
    requestVerification();
    }, [])

    if (Object.keys(decode).length === 0 ) {
        <div>Loading...</div>
    }

    if (error) 
        return (
            <>
                <Navbar mode='dark' />
                <div className="landing">
                    <div className="landing__panel">
                        <div className="landing__error">
                            <h1>{error}</h1>
                        </div>

                        <button onClick={() => navigate('/login')} className="btn-maroon">Try again</button>
                    </div>
                </div>
            </>
        )

  return (
    <>
        <Navbar mode="dark" />
        <div className="landing">
            <div className="landing__panel">
                <div className="landing__name">
                    <h1>Logged in as {firstName} {lastName}</h1>
                </div>
                <div className="landing__username">
                    <h3>@{userName}</h3>
                </div>
                <button onClick={logout} className="landing__logout-button">LOG OUT</button>
            </div>
        </div>
    </>
  )
}

export default Landing;