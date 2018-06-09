import React, { Component } from 'react';
import './Technologies.css';
import data from './../tech.json';

class Technologies extends Component{

    state = {
        techLoaded: false,
        techInfo: data
    };

    componentDidMount = () => {
        this.setState({
            techLoaded: true
        })
    }


    render(){
        let {techLoaded, techInfo} = this.state;

        if(!techLoaded) {
            return(
                <div>Loading...</div>
        )} else if(techLoaded){
        let techData = techInfo.tech.map((data,index) => (
                <div className="techIcons" id={index} >
                    <img className="img-fluid filter" src={data.image} alt={data.name} />
                </div>
            ))
        let designData = techInfo.design.map((data,index) => (
                <div className="techIcons" id={index}>
                    <img className="img-fluid filter" src={data.image} alt={data.name} />
                </div>
            ))
            return(

                <div id="Tech" className="tech">
                    <h2>Technologies Used</h2>
                    <h3>Development</h3>
                    <div className="justify-content-center row px-5 mb-5">
                        {techData}
                    </div>
                    <h3>Design</h3>
                    <div className="justify-content-center row px-5 mb-5">
                        {designData}
                    </div>
                </div>        
            )}
    }
}


export default Technologies;
