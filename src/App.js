import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Technologies from './components/Technologies';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Technologies />
      </div>
    );
  }
}

export default App;
