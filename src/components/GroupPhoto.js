import React, { Component } from 'react';
import theGroup from '../class-pics/ClassPic.png'; 
import './GroupPhoto.css';

class GroupPhoto extends Component {
    render(){
        return(
            <div className="background">
                <div className="container">
                    <img src={theGroup} className="img-fluid" alt="Group"/>
                </div>
            </div>
        )
    }
}

export default GroupPhoto;