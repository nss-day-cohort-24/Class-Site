import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Home.css';
import Gallery from './Gallery';
import { Route } from 'react-router-dom';
import PeopleDeetz from './PeopleDeets';


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
            <div>
                <Route exact path='/' component={Gallery} />
                <Route path='/amber' component={PeopleDeetz} />
                <Route path='/arthur' component={PeopleDeetz} />
                <Route path='/ben' component={PeopleDeetz} />
                <Route path='/dan' component={PeopleDeetz} />
                <Route path='/dylan' component={PeopleDeetz} />
                <Route path='/jeremy' component={PeopleDeetz} />
                <Route path='/jesie' component={PeopleDeetz} />
                <Route path='/kelsey' component={PeopleDeetz} />
                <Route path='/laura' component={PeopleDeetz} />
                <Route path='/lindsay' component={PeopleDeetz} />
                <Route path='/marc' component={PeopleDeetz} />
                <Route path='/mike' component={PeopleDeetz} />
                <Route path='/meg' component={PeopleDeetz} />
                <Route path='/melissa' component={PeopleDeetz} />
                <Route path='/million' component={PeopleDeetz} />
                <Route path='/ryan' component={PeopleDeetz} />
                <Route path='/sam' component={PeopleDeetz} />
                <Route path='/taylor' component={PeopleDeetz} />
                

            </div>
            )
        }
    }
}

export default MeetUsMap;