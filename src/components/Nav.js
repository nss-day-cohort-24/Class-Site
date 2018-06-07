import React, { Component } from 'react';
import './Nav.css';
import C24Logo from  '.././images/nss24-logo.svg';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem } from 'reactstrap';

class Navigation extends Component {
    state = {
      isOpen: false,
      modal: false 
    };

  toggleNavbar = () => {
    this.setState({
    isOpen: !this.state.isOpen
  });
  }


  render() {
    return (
      <Navbar expand="md" className="d-flex justify-content-between text-middle uniNav stroke sticky-top">
                <NavLink to='/Class-Site' className="noBorder"><img src={C24Logo} alt="C24 Class Logo" className="c24Logo"/></NavLink>
                <button type="button" className="navbar-toggler" onClick={this.toggleNavbar} ><i className="fas fa-bars"></i></button>

              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="rightSideNav ml-auto" navbar>
                  <NavItem className="navList">
                      <NavLink to='/Class-Site/#About'> ABOUT </NavLink>
                  </NavItem>
                  <NavItem className="navList">
                      <NavLink to='/Class-Site/#Meet'>MEET</NavLink>
                  </NavItem>
                  <NavItem className="navList">
                      <NavLink to='/Class-Site/#Tech'>TECH</NavLink>
                  </NavItem>
                  <NavItem className="navList">
                      <NavLink to='/Class-Site/#Work'>WORK</NavLink>
                  </NavItem> 
                </Nav>
              </Collapse>
            </Navbar>
    );
  }
}

export default Navigation;
