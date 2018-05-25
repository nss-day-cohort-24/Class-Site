import React, { Component } from 'react';
// import logo from './logo.svg';
import '.././App.css';
import './Nav.css';

import C24Logo from  '.././images/C24Logo.png';
import { Navbar } from 'reactstrap';

class Nav extends Component {
  render() {
    return (
      <Navbar className="d-flex justify-content-between navBar">
       <img src={C24Logo} alt="C24 Class Logo" className="c24Logo"/>
       <ul className="rightSideNav">

          <li className="navList active">ABOUT </li>
          <li className="navList">MEET </li>
          <li className="navList">TECH </li>
          <li className="navList">WORK </li>
          <li className="navList">CASE </li>
          </ul>
      </Navbar>
    );
  }
}

export default Nav;
