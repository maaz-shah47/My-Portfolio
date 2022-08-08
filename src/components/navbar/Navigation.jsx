import React, { Fragment, useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { FaLinkedin, FaGithubSquare, FaFacebook, FaEnvelope, FaBars } from "react-icons/fa";
import ModalComponent from '../UI/ModalComponent';

import classes from './navigation.module.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }
  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  }

  const changeNavbarColor = () => {
    if(window.scrollY >= 80){
      setNavbarColor(true)
    }
    else {
      setNavbarColor(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Fragment>
      <Navbar className={navbarColor ? `${classes.navbar} ${classes.active}` : classes.navbar} collapseOnSelect expand="md" variant="dark">
        <Container>
          <NavbarBrand className={classes['navbar-brand']}>Syed Maaz Shah</NavbarBrand>
          <FaBars onClick={handleShowMenu} className={classes['menu-icon']}/>
          <Navbar.Collapse className='d-md-flex justify-content-md-end' id="responsive-navbar-nav">
            <Nav className='nav'>
              <a href="https://www.linkedin.com/in/maaz-shah-847991196/" target="_blank" rel='noreferrer' className={classes['nav-item']}> <FaLinkedin className={classes.icon} /> </a>
              <a href="https://github.com/maaz-shah47" target="_blank" className={classes['nav-item']} rel='noreferrer'> <FaGithubSquare className={classes.icon} /> </a>
              <a href="https://www.linkedin.com/in/maaz-shah-847991196/" target="_blank" className={classes['nav-item']} rel='noreferrer'> <FaFacebook className={classes.icon} /> </a>
              <a href="mailto:s.tech4747@gmail.com" target="_blank" className={classes['nav-item']} rel='noreferrer'> <FaEnvelope className={classes.icon} />  </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isOpen && <ModalComponent handleClose={handleClose} />}
    </Fragment>
  )
}
export default Navigation
