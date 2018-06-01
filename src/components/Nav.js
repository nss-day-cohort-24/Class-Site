import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '.././App.css';
import './Nav.css';
import C24Logo from  '.././images/nss24-logo.svg';
import { Navbar } from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';


class Nav extends Component {
  render() {
    return (
      <Navbar className="d-flex nav__container">


       <NavLink to='/' className="noBorder">
         <img src={C24Logo} alt="C24 Class Logo" className="c24Logo"/>
       </NavLink>

        <ul className="rightSideNav">
          <li className="navList"><NavLink to='/Class-Site/#About'> ABOUT </NavLink></li>
          <li className="navList"><NavLink to='/Class-Site/#Meet'>MEET</NavLink> </li>
          <li className="navList"><NavLink to='/Class-Site/#Tech'>TECH</NavLink> </li>
          <li className="navList"><NavLink to='/Class-Site/Work'>WORK</NavLink> </li>
        </ul>

      </Navbar>
    );
  }
}

export default Nav;
