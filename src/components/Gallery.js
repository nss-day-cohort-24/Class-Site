import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Home.css';
import pink from './images/pink_swatch.jpg';
import green from './images/green_swatch.jpg';
import purple from './images/purple_swatch.jpg';
import yellow from './images/yellow_swatch.jpg';


class Gallery extends Component {
    render() {
        return(
            <center><div className="flex-container">
                <img className="flex-item" alt=" " src={pink}/>
                <img className="flex-item" alt=" " src={green}/> 
                <img className="flex-item" alt=" " src={purple}/> 
                <img className="flex-item" alt=" " src={yellow}/>
                <img className="flex-item" alt=" " src={pink}/>
            </div></center>
        )
    }
}

export default Gallery;