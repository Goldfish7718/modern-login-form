import React from 'react'
import Navbar from '../../components/Navbar'
import './Landing.scss';

const Landing = () => {
  return (
    <>
        <Navbar mode="dark" />
        <div className="landing">
            <div className="landing__panel">
                <div className="landing__name">
                    <h1>Logged in as Tejas Nanoti</h1>
                </div>

                <div className="landing__username">
                    <h3>@tejasssssssss__</h3>
                </div>

                    <button className="landing__logout-button">LOG OUT</button>
            </div>
        </div>
    </>
  )
}

export default Landing;