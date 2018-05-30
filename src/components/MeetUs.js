import React from 'react';
// import { Link } from 'react-router';
import './Home.css';
import './MeetUs.css';
import arrow from './images/down.png';
import MeetUsMap from './MeetUs_Map';

function MeetUs() {
    return(

        <div className="meetUs">
            <img src={arrow} className="arrow" alt="arrow animation"/>
            <br />
            <MeetUsMap />
            <MeetUsMap />
            <MeetUsMap />
            <MeetUsMap />
        </div>

    )
}

export default MeetUs;