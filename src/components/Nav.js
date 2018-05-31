import React, { Component } from 'react';
// import logo from './logo.svg';
import '.././App.css';
import './Nav.css';
import { NavLink } from 'react-router-dom'
import C24Logo from  '.././images/nss24-logo.svg';
import { Navbar } from 'reactstrap';

class Nav extends Component {
  render() {
    return (
      <Navbar className="d-flex justify-content-between navBar">
       <NavLink to='/' className="noBorder"><img src={C24Logo} alt="C24 Class Logo" className="c24Logo"/></NavLink>
       
       <ul className="rightSideNav">
          <li className="navList"><NavLink to='/About'> ABOUT </NavLink></li>
          <li className="navList"><NavLink to='/Meet'>MEET</NavLink> </li>
          <li className="navList"><NavLink to='/Tech'>TECH</NavLink> </li>
          <li className="navList"><NavLink to='/Work'>WORK</NavLink> </li>
          </ul>
      </Navbar>
    );
  }
}

export default Nav;
