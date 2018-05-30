import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import HomeBody from './components/Home';
import MeetUs from './components/MeetUs';
import Nav from './components/Nav.js';
import Technologies from './components/Technologies';
import PeopleDeets from './components/PeopleDeets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HomeBody />
        <MeetUs />
        <Technologies />
      </div>
    );
  }
}

export default App;
