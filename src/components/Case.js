import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Case.css";

class Case extends Component {
    render(){
        return(
            <div className="casejs">
                <div className="container text-center">

                    <div className="row">
                        <div className="col1 col-5">
                            <div className="pt-4 mt-4 pb-3 mb-3 colorPalette">COLOR PALETTE</div>
                            
                            <div className="row">
                                <div className="col-sm p-0 m-2 box box1">
                                    #FFF1F0
                                </div>
                                <div className="col-sm p-0 m-2 box box2">
                                    #141414
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm p-0 m-2 box box3">
                                    #FFDFDC
                                </div>
                                <div className="col-sm p-0 m-2 box box4">
                                    #7783A3
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm p-0 m-2 box box5">
                                    #FFBFBB
                                </div>
                                <div className="col-sm p-0 m-2"></div>
                            </div>

                            <div className="row">
                                <div className="col-sm p-0 m-2 box box6">
                                    #DD847F
                                </div>
                                <div className="col-sm p-0 m-2"></div>
                            </div>

                        </div>

                        <div className="pt-4 mt-4 col-sm colColor text-left">
                            <div className="part1 mb-3">
                                <div className="underline">HEADING</div>
                                <div>NOTO SANS 34</div>
                                <div>REGULAR</div>
                                <div>425 KERN</div>
                            </div>

                            <div className="part2 mb-3">
                                <div className="underline">NAME HEADING</div>
                                <div>ROBOTO 45</div>
                                <div>REGULAR</div>
                                <div>100 KERN</div>
                                <div>50 LEAD</div>
                            </div>

                            <div className="part3 mb-3">
                                <div className="underline">SUB-HEADER</div>
                                <div>NOTO SANS 25</div>
                                <div>REGULAR</div>
                                <div>425 KERNING</div>
                            </div>

                            <div className="part4 mb-3">
                                <div className="underline">NAV</div>
                                <div>ROBOTO 25</div>
                                <div>REGULAR</div>
                                <div>500 KERNING</div>
                            </div>
                        </div>
            
                        <div className="pt-4 mt-4 col-sm col3 colColor text-left">
                            <div className="part1 mb-3 underline">
                                <div>ABOUT BODY</div>
                                <div>NOTO SANS 22</div>
                                <div>REGULAR</div>
                                <div>40 KERN</div>
                                <div>59 LEAD</div>
                            </div>

                            <div className="part2 mb-3">
                                <div className="underline">TECH BODY</div>
                                <div>NOTO SANS 12</div>
                                <div>REGULAR</div>
                                <div>40 KERN</div>
                                <div>24 LEAD</div>
                            </div>

                            <div className="text-center part3 mb-3 py-2">
                                ACTION BUTTON
                            </div>

                            <div className="part4 mb-3">
                                <div>90H X 319W</div>
                                <div>BG COLOR #141414</div>
                                <div>100 KERNING</div>
                                <div>COLOR #FFFFFFF</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Case;