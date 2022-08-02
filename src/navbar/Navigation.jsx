import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { FaLinkedin, FaGithubSquare, FaFacebook, FaEnvelope, FaBars } from "react-icons/fa";

import classes from './navigation.module.css'

const Navigation = () => {
  return (
    <Navbar className={classes.navbar} collapseOnSelect expand="md" variant="dark">
      <Container>
        <NavbarBrand className={classes['navbar-brand']}>Syed Maaz Shah</NavbarBrand>
        <FaBars className={classes['menu-icon']}/>
        <Navbar.Collapse className='d-md-flex justify-content-md-end' id="responsive-navbar-nav">
          <Nav className='nav'>
            <NavLink className={classes['nav-item']}> <FaLinkedin className={classes.icon} /> </NavLink>
            <NavLink className={classes['nav-item']}> <FaGithubSquare className={classes.icon} /> </NavLink>
            <NavLink className={classes['nav-item']}> <FaFacebook className={classes.icon} /> </NavLink>
            <NavLink className={classes['nav-item']}> <FaEnvelope className={classes.icon} />  </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navigation
