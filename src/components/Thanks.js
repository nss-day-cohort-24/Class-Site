import React from 'react';
import './Thanks.css';
import logo from './images/NSS-Logo.png';

const Thanks = () => {
    return (
        <div className="thanksDiv">
            <div className="row justify-content-center">
                <h2>Special Thanks To...</h2>
                <div className="staffDiv">
                    <h3>NSS Staff</h3>
                        <ul>
                            <li>Brenda Long</li>
                            <li>Susan Culkin</li>
                            <li>Dr. Teresa Vasquez</li>
                            <li>Jisie David</li>
                            <li>Greg Korte</li>
                            <li>Jessica Brawner</li>
                            <li>John Wark</li>
                        </ul>
                </div>
                <div className="photoDiv mt-5">
                    <h3>Photography</h3>
                    <ul>
                        <li>Inge Kathleen Photography</li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="mt-5">Site Developed and Designed by Unicorns</h3>
                    <p>&copy; 2018 Cohort 24 — Nashville Software School</p>
                </div>
                </div>
                <div className="d-block">
                    <img className="nssLogo" src={logo} alt="NSS logo"></img>
                </div>
        </div>
    )
}

export default Thanks;