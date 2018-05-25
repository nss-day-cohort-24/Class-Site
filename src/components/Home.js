import React from 'react';
import './Home.css';
import Unicorn from '../images/unicorn.svg';


function HomeBody() {
    return (
        <main>
            <h1>hello world<span className="amp-h2">!</span></h1>
            <img src={Unicorn} alt="A Silhouette of An Awesome Unicorn" className="unicorn"/>
            <h1>design + development = unicorn</h1>
            <p className="small-caps-p">nashville software school cohort <span className="amp-p">24</span>
            </p>

        </main>
    )
}

export default HomeBody;