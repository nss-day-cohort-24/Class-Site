import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PeopleDeetz from './PeopleDeets.js';
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
import taylor from '../class-pics/taylor.png';

import sillyamber from '../class-pics/sillyamber.png';
import sillyarthur from '../class-pics/sillyarthur.png';
import sillyben from '../class-pics/sillyben.png';
import sillydan from '../class-pics/sillydan.png';
import sillydylan from '../class-pics/sillydylan.png';
import sillyjeremy from '../class-pics/sillyjeremy.png';
import sillyjesie from '../class-pics/sillyjesie.png';
import sillykelsey from '../class-pics/sillykelsey.png';
import sillylaura from '../class-pics/sillylaura.png';
import sillylindsay from '../class-pics/sillylindsay.png';
import sillymarc from '../class-pics/sillymark.png';
// import sillymike from '../class-pics/sillymike.png';
import sillymeg from '../class-pics/sillymeg.png';
import sillymelissa from '../class-pics/sillymelissa.png';
import sillymillion from '../class-pics/sillymillion.png';
import sillyphonethip from '../class-pics/sillyphonthip.png';
import sillyryan from '../class-pics/seriousryan.png';
import sillysam from '../class-pics/sillysam.png';
import sillytaylor from '../class-pics/sillytaylor.png';








let classList = [
     {
        name: "Amber",
        pic: amber,
        silly: sillyamber,
        link: "/amber" 

    },
    {
        name: "Arthur",
        pic: arthur,
        silly: sillyarthur,
        link: "/arthur"
    },
    {
        name: "Ben",
        pic: ben,
        silly: sillyben,
        link: "/ben"
    },
    {
        name: "Dan",
        pic: dan,
        silly: sillydan,
        link: "/dan"
    },
    {
        name: "Dylan",
        pic: dylan,
        silly: sillydylan,
        link: "/dylan"
    },
    {
        name: "Jeremy",
        pic: jeremy,
        silly: sillyjeremy,
        link: "/jeremy"
    },
    {
        name: "Jesie",
        pic: jesie,
        silly: sillyjesie,
        link: "/jesie"
    },
    {
        name: "Kelsey",
        pic: kelsey,
        silly: sillykelsey,
        link: "/kelsey"
    },
    {
        name: "Laura",
        pic: laura,
        silly: sillylaura,
        link: "/laura"
    },
    {
        name: "Lindsay",
        pic: lindsay,
        silly: sillylindsay,
        link: "/lindsay"
    },
    {
        name: "Marc",
        pic: marc,
        silly: sillymarc,
        link: "/marc"
    },
    {
        name: "Mike",
        pic: mike,
        silly: "",
        link: "/mike"
    },
    {
        name: "Meg",
        pic: meg,
        silly: sillymeg,
        link: "/meg"
    },
    {
        name: "Melissa",
        pic: melissa,
        silly: sillymelissa,
        link: "/melissa"
    },
    {
        name: "Million",
        pic: million,
        silly: sillymillion,
        link: "/million"
    },
    {
        name: "Phonethip",
        pic: phonetip,
        silly: sillyphonethip,
        link: "/phonethip"
    },
    {
        name: "Ryan",
        pic: ryan,
        silly: sillyryan,
        link: "/ryan"
    },
    {
        name: "Sam",
        pic: sam,
        silly: sillysam,
        link: "/sam"
    },
    {
        name: "Taylor",
        pic: taylor,
        silly: sillytaylor,
        link: "/taylor"
    },
];












let Gallery = () => {
    let gallery = classList.map((item, index) => 
        <div key={index} className="p-2" style={{width: 10 + 'rem', height: 12 + 'rem'}}>
            <Link to={{ pathname: item.link, state: { pic: item.pic, silly: item.silly, link: item.link, name: item.name} }}><img className="img-thumbnail" alt="" src={item.pic}/></Link>
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