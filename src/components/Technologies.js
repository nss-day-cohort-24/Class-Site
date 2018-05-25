import React, { Component } from 'react';
import './Technologies.css';

class Technologies extends Component{

    this.state = {
        techLoaded: false
    
    }

    componentDidMount = () => {
        console.log("did mount");
        this.getTech();
    }


getTech = () => {{
    url: "./src/tech.json"
}
    .then(
        (result) => {
            this.setState({
                techLoaded: true,
                techResult: result
            });
            console.log("Checking Tech fetch results: ", this.techResult);
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
        return(
            <div>
                <h2 className="heading text-center">Technologies Used</h2>
            </div>
        );
    }
}

export default Technologies;