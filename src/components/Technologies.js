import React, { Component } from 'react';
import './Technologies.css';
import data from './../tech.json';

class Technologies extends Component{

    state = {
        techLoaded: false,
        techInfo: data
    };

    componentDidMount = () => {
        console.log("tech did mount");
        this.setState({
            techLoaded: true
        })
        // console.log('techInfo', this.state.techInfo);
    }


    render(){
        let {techLoaded, techInfo} = this.state;

        if(!techLoaded) {
            return( 
                <div>Loading...</div>
        )} else if(techLoaded){
            // console.log('line 28', techInfo)
        let techData = techInfo.tech.map((data,index) => (
                <div key={index} className="col-sm-2 mx-auto my-3" id={index}>
                    <img className="img-fluid" src={data.image} alt={data.name} />
                </div>
            ))
            return(
                <div>
                    <div className="heading pt-5 mt-5">Technologies</div>
                    <div className="container-fluid row">
                        {techData}
                    </div>
                </div>
        )}
    }
}


export default Technologies;