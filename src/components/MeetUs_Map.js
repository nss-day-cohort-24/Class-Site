import React, { Component } from 'react';
import './MeetUs_Map.css';
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
        // console.log("Gallery did mount");

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
                // console.log("images object: ", this.setStateimagesResult);
            },
            (error) =>{
                this.setState({
                    isLoaded: true,
                    error: error
                });
            })
    }

    render() {
        let { error, imagesLoaded } = this.state;

        if(error) {
            return(
                <div>Error: Please reload the page.</div>
            )
        // } else if(!imagesLoaded) {
        //     return <div>Loading...</div>
        } else if(!imagesLoaded){
            return(
            <div id="detailsPage">
              <Gallery />
            </div>
            )
        }
    }
}

export default MeetUsMap;
