import React, { Component } from 'react';
import './PeopleDeets.css';
import email from './social/envelope.png';
import github from './social/github.png';
import linkedin from './social/linkedin-in.png';
import personalsite from './social/address-card.png';

import lindsay from '../class-pics/lindsay.png';
import lindsaysilly from '../class-pics/sillylindsay.png';

class PeopleDeetz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: this.props.location.state.pic
        };
        this.funny = this.funny.bind(this);
        this.stopfunny = this.stopfunny.bind(this);
    }

    funny() {
        this.setState({
            imgSrc: this.props.location.state.silly
        });
    }

    stopfunny() {
        this.setState({
            imgSrc: this.props.location.state.pic
        });
    }

    render() {
        let data = this.props.location.state;
        return (
            <div className="peopledeetzbackground d-flex peopledeetzpage">
                <div className="picturediv">
                    <img src={this.state.imgSrc} className="classpicture m-5" alt="classpicture" onMouseEnter={this.funny} onMouseLeave={this.stopfunny} />
                </div>
                <div className="aboutdiv m-5 px-5 py-4 align-self-center">
                    <h1 className="class-h1 black text-center mb-3">LINDSAY<br />MULHOLLEN</h1>
                    <h3 className="class-h3 black text-center mb-3">"cool. coolcoolcoolcoolcool."</h3>
                    <p className="class-p black">
                        Inspired to get a start in development after encountering interactive museum exhibits, I'm excited to bring my unique background to the development world where I plan to make my mark with innovative thinking and motivation to tackle even the most unthinkable projects.
                    </p>
                </div>
                <div className="socialdiv d-flex">
                    <a href="https://www.linkedin.com/in/mulhollen/" target="_blank" ><img src={github} alt="" className="icon m-2" /></a>
                    <a href="https://github.com/mulhollen" target="_blank" ><img src={linkedin} alt="" className="icon m-2" /></a>
                    <a href="" target="_blank" ><img src={email} alt="icon" className="icon m-2" /></a>
                    <a href="lindsaymulhollen.com" target="_blank" ><img src={personalsite} alt="icon" className="icon m-2" /></a>
                </div>
            </div>
        );
    }
}

export default PeopleDeetz;