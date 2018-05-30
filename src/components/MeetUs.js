import React from 'react';
// import { Link } from 'react-router';
import './Home.css';
import './MeetUs.css';
import arrow from './images/down.png';
import MeetUsMap from './MeetUs_Map';
// import { Route } from 'react-router-dom';


function MeetUs() {
    return(

        <div>
            <img src={arrow} className="arrow" alt="arrow animation"/>
            <br />
            <MeetUsMap />


        </div>

    )
}

export default MeetUs;