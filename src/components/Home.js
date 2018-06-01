import React from 'react';
// import './Home.css';
import '../App.css'
import Unicorn from '../images/unicorn.svg';
import MeetUs from './MeetUs';
import Technologies from './Technologies';
import About from './About';
import GroupPhoto from './GroupPhoto';
import Process from './Process';


function HomeBody() {
    return (
        <div>
        <main>
            {/* <h1>hello world<span className="amp-h2">!</span></h1> */}
            <img src={Unicorn} alt="A Silhouette of An Awesome Unicorn" className="unicorn"/>
            <h2>design + development = unicorn</h2>
            <p className="small-caps-p">nashville software school cohort <span className="amp-p">24</span>
            </p>

        </main>

        <About />
        <MeetUs />
        <Technologies />
        <GroupPhoto />
        <Process />
        </div>
    )
}

export default HomeBody;