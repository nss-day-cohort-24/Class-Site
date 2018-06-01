import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Work.css";
import Filler from "./images/gray_swatch.jpg";
import doLogo from "./images/doLogo.png";
import wyfyLogo from "./images/wyfyLogo.png";
import crimeCheckerLogo from "./images/crimeCheckerLogo.png";

class Work extends Component {
    render(){
        return(
            <div className="workjs">
                <div className="pb-5">
                    <div className="col text-center">
                        <div className="perfectPitch py-5">PERFECT PITCH 2018</div>
                        <div className="head2 pb-4">NASHVILLE OPEN DATA GROUP PROJECTS</div>
                    </div>

                    <div className="row justify-content-center pb-5">
                        <div className="col-4-sm">
                            <a href="https://github.com/nss-day-cohort-24/do" target="_blank">
                                <img src={doLogo} alt="Filler" height="276" width="286"/>
                                <div className="head2 text-center">DO.</div>
                            </a>
                        </div>
                        <div className="col-4-sm text-center mx-3">
                            <a href="https://github.com/nss-day-cohort-24/wyfy" target="_blank">
                                <img src={wyfyLogo} alt="Filler" height="276" width="286"/>
                                <div className="head2 text-center">WYFY</div>
                            </a>
                        </div>
                        <div className="col-4-sm text-center">
                            <a href="https://github.com/nss-day-cohort-24/uix-crime-checker" target="_blank">
                                <img src={crimeCheckerLogo} alt="Filler" height="276" width="286"/>
                                <div className="head2 text-center">CRIME CHECKER</div>                        
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;