import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Process from './components/Process.js';
import Technologies from './components/Technologies';
import Main from './components/Main';
import PeopleDeets from './components/PeopleDeets';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav />
          <HomeBody />
          <MeetUs />
          <Technologies />
          <Process />
          <Main />

        </div>
    );
  }
}

export default App;
