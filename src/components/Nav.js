import React, { Component } from 'react';
// import logo from './logo.svg';
import '.././App.css';
import './Nav.css';
import { Link } from 'react-router-dom'
import C24Logo from  '.././images/nss24-logo.svg';
import { Navbar } from 'reactstrap';

class Nav extends Component {
  render() {
    return (
      <Navbar className="d-flex justify-content-between navBar">
       <Link to='/'><img src={C24Logo} alt="C24 Class Logo" className="c24Logo"/></Link>
       <ul className="rightSideNav">

          <li className="navList active"><Link to='/About'> ABOUT </Link></li>
          <li className="navList"><Link to='/Meet'>MEET</Link> </li>
          <li className="navList"><Link to='/Tech'>TECH</Link> </li>
          <li className="navList"><Link to='/Work'>WORK</Link> </li>
          </ul>
      </Navbar>
    );
  }
}

export default Nav;
