import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav />
          <Main />

        </div>
    );
  }
}

export default App;
