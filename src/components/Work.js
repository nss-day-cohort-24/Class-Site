import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Work.css";
import Filler from "./images/gray_swatch.jpg";

class Work extends Component {
    render(){
        return(
            <div className="workjs mx-5">
                <div className="container pb-5">
                    <div className="col text-center">
                        <div className="perfectPitch py-5">PERFECT PITCH 2018</div>
                        <div className="head2 pb-4">NASHVILLE OPEN DATA GROUP PROJECTS</div>
                    </div>

                    <div className="row justify-content-center pb-5">
                        <div className="col-4-sm">
                            <img src={Filler} alt="Filler" height="276" width="286"/>
                            <div className="head2 text-center">DO.</div>
                        </div>
                        <div className="col-4-sm text-center mx-3">
                            <img src={Filler} alt="Filler" height="276" width="286"/>
                            <div className="head2 text-center">WYFY</div>
                        </div>
                        <div className="col-4-sm text-center">
                            <img src={Filler} alt="Filler" height="276" width="286"/>
                            <div className="head2 text-center">CRIME CHECKER</div>                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;