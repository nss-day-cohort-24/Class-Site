import React from 'react';
import './Home.css';
import logo from './images/unicorn.gif';


function HomeBody() {
    return (
        <main>
            <h1>hello world<span className="amp-h2">!</span></h1>
            <img src={logo} alt=" "/>
            <h1>design <span className="amp-h2">&amp;</span> development <span className="amp-h2">=</span> unicorn</h1>
            <p className="small-caps-p">nashville software school cohort <span className="amp-p">24</span>
            </p>

        </main>
    )
}

export default HomeBody;