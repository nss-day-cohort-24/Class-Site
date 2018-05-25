import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Home.css';
// import pink from './images/pink_swatch.jpg';
// import green from './images/green_swatch.jpg';
// import purple from './images/purple_swatch.jpg';
// import yellow from './images/yellow_swatch.jpg';
import amber from '../class-pics/amber';
import arthur from '../class-pics/arthur';
import ben from '../class-pics/ben';
import dan from '../class-pics/dan';
import dylan from '../class-pics/dylan';
import jeremy from '../class-pics/jeremy';
import jesie from '../class-pics/jesie';
import kelsey from '../class-pics/kelsey';
import laura from '../class-pics/laura';
import lindsay from '../class-pics/lindsay';
import mark from '../class-pics/mark';


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