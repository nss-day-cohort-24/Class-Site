import React, { Component } from 'react';
import './Thanks.css';
import logo from './images/NSS-Logo.png';

const Thanks = () => {
    return (
        <div className="thanksDiv">
            <div className="flex-row justify-content-center">
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
                <div className="photoDiv">
                    <h3>Photography</h3>
                    <ul>
                        <li>Inge Kathleen Photography</li>
                    </ul>
                    </div>
                <img className="nssLogo" src={logo}></img>
                <h3>Site Developed and Designed by Unicorns</h3>
                <p>&copy; Cohort 24 Unicorns Nashville Software School 2018</p>
            </div>
        </div>
    )
}

export default Thanks;