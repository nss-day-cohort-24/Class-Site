import React, { Component } from 'react';
import theGroup from './images/groupPhoto.jpg'; 

class GroupPhoto extends Component {
    render(){
        return(
            <div className="container">
                <img src={theGroup} className="img-fluid" alt="Group"/>
            </div>
        )
    }
}

export default GroupPhoto;