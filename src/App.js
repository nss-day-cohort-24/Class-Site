import React, { Component } from 'react';
import './App.css';
import HomeBody from './components/Home';
import MeetUs from './components/MeetUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeBody />
        <MeetUs />
      </div>
    );
  }
}

export default App;
