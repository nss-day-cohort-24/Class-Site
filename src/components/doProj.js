import React, { Component } from 'react';
import './doProj.css';
import email from './social/envelope.png';
import github from './social/github.png';
import linkedin from './social/linkedin-in.png';
import personalsite from './social/address-card.png';

import lindsay from '../class-pics/lindsay.png';
import lindsaysilly from '../class-pics/sillylindsay.png';

class DoProj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: lindsay
        };
        this.funny = this.funny.bind(this);
        this.stopfunny = this.stopfunny.bind(this);
    }

    funny() {
        this.setState({
            imgSrc: lindsaysilly
        });
    }

    stopfunny() {
        this.setState({
            imgSrc: lindsay
        });
    }

    render() {
        return (
            <div className="peopledeetzbackground d-flex peopledeetzpage">
                <div className="picturediv">
                    <img src={this.state.imgSrc} className="classpicture m-5" alt="classpicture" onMouseEnter={this.funny} onMouseLeave={this.stopfunny} />
                </div>
                <div className="aboutdiv m-5 px-5 py-4 align-self-center">
                    <h1 className="class-h1 black text-center mb-3">do.</h1>
                    <h3 className="class-h3 black text-center mb-3"><i>Match with your favorite Nashville public art, parks, and historical sites</i></h3>
                    <div className="d-flex flex-column pb-5">
                    <a href="" className="my-2">TEAM</a>
                    <a href="" className="my-2">PURPOSE</a>
                    <a href="" className="my-2">PROCESS</a>
                    <a href="" className="my-2">TECH</a>
                    </div>
                </div>
                <div className="socialdiv d-flex">
                    <a href="https://github.com/nss-day-cohort-24/do" target="_blank" ><img src={github} alt="" className="icon m-2" /></a>
                </div>
            </div>
        );
    }
}

export default DoProj;