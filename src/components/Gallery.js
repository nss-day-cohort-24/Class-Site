import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Home.css';
import pink from './images/pink_swatch.jpg';
import green from './images/green_swatch.jpg';
import purple from './images/purple_swatch.jpg';
import yellow from './images/yellow_swatch.jpg';
import amber from '../class-pics/amber.png';
import arthur from '../class-pics/arthur.png';
import ben from '../class-pics/ben.png';
import dan from '../class-pics/dan.png';
import dylan from '../class-pics/dylan.png';
import jeremy from '../class-pics/jeremy.png';
import jesie from '../class-pics/jesie.png';
import kelsey from '../class-pics/kelsey.png';
import laura from '../class-pics/laura.png';
import lindsay from '../class-pics/lindsay.png';
import marc from '../class-pics/mark.png';
import mike from '../class-pics/mike.png';
import meg from '../class-pics/meg.png';
import melissa from '../class-pics/melissa.png';
import million from '../class-pics/million.png';
import phonetip from '../class-pics/phonthip.png';
import ryan from '../class-pics/ryan.png';
import sam from '../class-pics/sam.png';

let Gallery = () => {
    let classList = [amber, arthur, ben, dan, dylan, jeremy, jesie, kelsey, laura, lindsay, marc, mike, meg, melissa, million, phonetip, ryan, sam];
    console.log(classList);
    let gallery = classList.map((item, index) =>
        <div key={index} className="p-2" style={{width: 10 + 'rem', height: 12 + 'rem'}}>
            <img className="img-thumbnail" alt="" src={item}/>
        </div>
    )
        return(
            <div id="gallery">
                <div className="mt-5 pt-5 d-flex flex-row flex-wrap container justify-content-around">
                    {gallery}
                </div>
            </div>
        )
}

export default Gallery;