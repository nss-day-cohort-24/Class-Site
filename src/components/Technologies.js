import React, { Component } from 'react';
import './Technologies.css';

class Technologies extends Component{

    state = {
        techLoaded: false
    
    }

    componentDidMount = () => {
        console.log("tech did mount");
        this.getTech();
    }


getTech = () => {
    fetch("../src/tech.json")
    .then(
        (data) => {
                this.setState({
                techLoaded: true,
                techResult: data
            });
            console.log("Checking Tech fetch results: ", this.state.techResult);
        },
        (error) => {
            this.setState({
                techLoaded: true,
                error: true
            });
            console.log("ERROR fetching tech.json");
        });
}


    render(){
        let {error, techLoaded, techResult} = this.state;

        if(error) {
            return (
                <div>
                    <div> Error: Technologies failed to load. Please refresh the page and try again.</div>
                </div>
        )} else if(!techLoaded) {
            return( 
                <div>Loading...</div>
        )} else if(techLoaded){
        let techState = this.state.techResult;
        console.log('techState, result', techState, techResult)
        let techData = techResult.map((data,index) => (
            <div id={index}>
                <img width={200} height={200} src={data.image} alt={data.name} />
            </div>
            ))
            return(
            <div>{techData}</div>
        )}
    }
}


export default Technologies;