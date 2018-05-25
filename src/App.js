import React, { Component } from 'react';
import './App.css';
import HomeBody from './components/Home';
import MeetUs from './components/MeetUs';
import Nav from './components/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HomeBody />
        <MeetUs />
      </div>
    );
  }
}

export default App;
