import React from 'react';
import './Home.css';
import '../App.css'
import Unicorn from '../images/unicorn.svg';
import MeetUs from './MeetUs';
import Technologies from './Technologies';
import About from './About';
import GroupPhoto from './GroupPhoto';
import Process from './Process';
import Work from './Work';


function HomeBody() {
    return (
        <div>
            <main className ="Section-landing">
                <img src={Unicorn} alt="A Silhouette of An Awesome Unicorn" className="unicorn"/>
                <h2>design + development = unicorn</h2>
                <p className="small-caps-p">nashville software school cohort <span className="amp-p">24</span>
                </p>

            </main>

            <About />
            <MeetUs />
            <Technologies />
            <Work />
            <Process />
            <GroupPhoto />
        </div>
    )
}

export default HomeBody;
