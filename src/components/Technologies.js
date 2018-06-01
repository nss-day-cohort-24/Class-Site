import React, { Component } from 'react';
import '../App.css';
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
                <div className="col mx-auto my-3" id={index}>
                    <img className="img-fluid filter" src={data.image} alt={data.name} />
                </div>
            ))
        let designData = techInfo.design.map((data, index)=>(
                <div className="col mx-auto my-3" id={index}>
                    <img className="img-fluid filter" src={data.image} alt={data.name} />
                </div>
        ))
            return(

                <div id="Tech" className="tech">
                    <h2>Technologies Used</h2>
                    <h3>Development</h3>
                    <div className="container-fluid row mb-5">
                        {techData}
                    </div>
                    <h3 className="pt-5">Design </h3>
                    <div className="container-fluid row mb-5">
                        {designData}
                    </div>
                </div>
        )}
    }
}


export default Technologies;