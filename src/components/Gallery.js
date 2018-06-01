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
import sillyjesie from '../class-pics/ssjesie.png';
import sillykelsey from '../class-pics/sillykelsey.png';
import sillylaura from '../class-pics/sillylaura.png';
import sillylindsay from '../class-pics/sillylindsay.png';
import sillymarc from '../class-pics/sillymark.png';
import sillymike from '../class-pics/mikesilly.png';
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
        link: "/amber",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web" 

    },
    {
        name: "Arthur",
        pic: arthur,
        silly: sillyarthur,
        link: "/arthur",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Ben",
        pic: ben,
        silly: sillyben,
        link: "/ben",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Dan",
        pic: dan,
        silly: sillydan,
        link: "/dan",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Dylan",
        pic: dylan,
        silly: sillydylan,
        link: "/dylan",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Jeremy",
        pic: jeremy,
        silly: sillyjeremy,
        link: "/jeremy",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Jesie",
        pic: jesie,
        silly: sillyjesie,
        link: "/jesie",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Kelsey",
        pic: kelsey,
        silly: sillykelsey,
        link: "/kelsey",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Laura",
        pic: laura,
        silly: sillylaura,
        link: "/laura",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Lindsay",
        pic: lindsay,
        silly: sillylindsay,
        link: "/lindsay",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Marc",
        pic: marc,
        silly: sillymarc,
        link: "/marc",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Mike",
        pic: mike,
        silly: sillymike,
        link: "/mike",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Meg",
        pic: meg,
        silly: sillymeg,
        link: "/meg",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Melissa",
        pic: melissa,
        silly: sillymelissa,
        link: "/melissa",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Million",
        pic: million,
        silly: sillymillion,
        link: "/million",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Phonethip",
        pic: phonetip,
        silly: sillyphonethip,
        link: "/phonethip",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Ryan",
        pic: ryan,
        silly: sillyryan,
        link: "/ryan",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Sam",
        pic: sam,
        silly: sillysam,
        link: "/sam",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Taylor",
        pic: taylor,
        silly: sillytaylor,
        link: "/taylor",
        bio: "Since enrolling in Nashville Software School's Front End Developer and UI/UX Design program, I have magnified my potential as a designer, fully embraced the user experience, and have shaped my code with clarity in all the pressure and opportunity that this bootcamp provides. I can't wait to see what we will make together! ",
        quote: "Never fear, BTC will save us!"
    },
];












let Gallery = () => {
    let gallery = classList.map((item, index) => 
        <div key={index} className="p-2" style={{width: 10 + 'rem', height: 12 + 'rem'}}>
            <Link to={{ pathname: item.link, state: { pic: item.pic, silly: item.silly, link: item.link, name: item.name, bio: item.bio, quote: item.quote} }}><img className="img-thumbnail" alt="" src={item.pic}/></Link>
        </div>
    )
        return(
            <div id="gallery">
                <div className="d-flex flex-row flex-wrap container justify-content-around align-items-center">
                    {gallery}
                </div>
            </div>
        )
}

export default Gallery;