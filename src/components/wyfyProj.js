import React, { Component } from 'react';
import './doProj.css';
import email from './social/envelope.png';
import github from './social/github.png';
import linkedin from './social/linkedin-in.png';
import personalsite from './social/address-card.png';

// import wyfylogo from './projpics/wyfy-logo.png';
import wyfyapp from './projpics/wyfy1.png';

class DoProj extends Component {
  

    render() {
        return (
            <div className="peopledeetzbackground d-flex peopledeetzpage">
                <div className="picturediv">
                    <img src={wyfyapp} className="classpicture m-5" alt="wyfy app" onMouseEnter={this.funny} onMouseLeave={this.stopfunny} />
                </div>
                <div className="aboutdiv m-5 px-5 py-4 align-self-center">
                    <h1 className="class-h1 black text-center mb-3">Crime Checker</h1>
                    <h3 className="class-h3 black text-center mb-3"><i>Present the information from the Nashville Police Call Logs API in a way that helps Nashville residents stay more informed and up to date on potential crimes happening in their area</i></h3>
                    <div className="d-flex flex-column pb-5">
                        <a href="" className="my-2">TEAM</a>
                        <a href="" className="my-2">PURPOSE</a>
                        <a href="" className="my-2">PROCESS</a>
                        <a href="" className="my-2">TECH</a>
                    </div>
                </div>
                <div className="socialdiv d-flex">
                    <a href="https://github.com/nss-day-cohort-24/wyfy" target="_blank" ><img src={github} alt="" className="icon m-2" /></a>
                </div>
            </div>
        );
    }
}

export default DoProj;