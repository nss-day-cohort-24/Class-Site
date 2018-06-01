import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Home.css';
import { Route } from 'react-router-dom';
import Gallery from './Gallery';


class MeetUsMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imagesLoaded: false,
            imagesResult: [],
            error: null
        }}

    componentDidMount() {
        console.log("Gallery did mount");

    }

    showGallery() {
        fetch("http://localhost:3000/Gallery")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    imagesLoaded: true,
                    imagesResult: result
                });
                console.log("images object: ", this.setStateimagesResult);
            },
            (error) =>{
                this.setState({
                    isLoaded: true,
                    error: error
                });
                console.log("error here");
            })
    }

    render() {
        let { error, imagesLoaded } = this.state;

        if(error) {
            return(
                <div>Error: try again mofo</div>
            )
        // } else if(!imagesLoaded) {
        //     return <div>Loading...</div>
        } else if(!imagesLoaded){
            return(
            <div id="detailsPage" /*className="Section-meetUs-grid"*/> 
                <Gallery />
            </div>
            )
        }
    }
}

export default MeetUsMap;