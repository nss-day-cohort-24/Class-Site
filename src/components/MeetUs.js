import React from 'react';
// import { Link } from 'react-router';
import './Home.css';
import './MeetUs.css';
import '../App.css';
import arrow from './images/down.png';
import MeetUsMap from './MeetUs_Map';

function MeetUs() {
    return(

        <div id="Meet" className="meetUs">
            {/* <img src={arrow} className="arrow" alt="arrow animation"/>
            <br /> */}
            <h2 className="pb-5">Nashville Software School Cohort 24</h2>
            <MeetUsMap />
            <MeetUsMap />
            <MeetUsMap />
            <MeetUsMap />
        </div>

    )
}

export default MeetUs;