import React from 'react';
// import { Link } from 'react-router';
import './Home.css';
import './MeetUs.css';
import arrow from './images/down.png';
import MeetUsMap from './MeetUs_Map';
// import { Route } from 'react-router-dom';


function MeetUs() {
    return(
        <section id="Meet" className="meetUs">
            {/* <img src={arrow} className="arrow" alt="arrow animation"/>
            <br /> */}
            <h2>Nashville Software School Cohort 24</h2>
            <MeetUsMap />
        </section>
    )
}

export default MeetUs;
