import React from 'react';
import './Process.css';

const Process = (props) =>{
        return(
            <div className="process">
                <h2>our process</h2>

                    <div className= "processes">

                        <div className="row align-center processRow">
                            <h3 className="col-12 col-sm-4">the challenge</h3>
                            <div className="col-12 col-sm-6 text-left">
                                <p className="media-paragraph">To collaborate as a class and develop a website which showcases our front-end design and development skills for potential employers.</p>
                            </div>
                        </div>

                        <div className="row align-center processRow">
                            <h3 className="col-12 col-sm-4">research</h3>
                            <div className="col-12 col-sm-6 text-left">
                                <h3 className="secondHeading text-align-left">class</h3>
                                <p className="media-paragraph">To gain more insight we sent out a class survey to understand how the class as a whole would like to be marketed.</p>
                            </div>
                            <div className="row align-center employerTypeRow">
                                <div className="col-12 align-center">
                                    <h3 className="workTypeHeading">Desired Employment Type</h3>
                                </div>
                                <div className="col-6 pl-0 pr-4 align-right vertLine">
                                    <ul>
                                        <li className="workType">agency</li>
                                        <li className="workType">startup</li>
                                        <li className="workType">enterprise</li>
                                    </ul>
                                </div>
                                <div className="bars col-6 pr-0">
                                    <div className="bar2 text-left align-middle"><p>29%</p></div>
                                    <div className="bar3 text-left align-middle"><p>29%</p></div>
                                    <div className="bar1 text-left align-middle"><p>42%</p></div>
                                </div>
                                <div className="col-12 align-center">
                                <p id="careerPursuitParagraph"><b>74%</b> plan to pursue both design and development in their future career.</p>
                                </div>
                                </div>
                                <h3 className="col-12 col-sm-4">&nbsp;</h3>
                                <div className="col-12 col-sm-6 text-left">
                                <h3 className="secondHeading text-align-left">competitors</h3>
                                <p className="media-paragraph">We took a look at our closest competitors to see how they went about developing their class sites.</p>
                            </div>
                        </div>

                        <div className="row align-center">
                            <h3 className="col-12 col-sm-4">development</h3>
                            <div className="col-12 col-sm-6 text-left">
                                <h3 className="secondHeading text-align-left">professional fun</h3>
                                    <p className="media-paragraph">It is important that the class website shows potential employers our passion for coding and design, as well as our ability to differentiate and stand out from other cohorts.</p>
                                    <p className="media-paragraph">Accomplished by writing clean + accessible + modular code in react with solid site architecture, firm and consistent visual hierarchy, and the coziest pinks you've ever seen.</p>

                                <h3 className="secondHeading text-align-left">user interviews</h3>
                                    <p className="media-paragraph">The research team also conducted interviews with instructors, students, and staff members to help establish reasonable deadlines, style guide choices, and prototype feedback.</p>

                            </div>
                        </div>
                    </div>
            </div>
        )
    }

export default Process;