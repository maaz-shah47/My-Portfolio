import React, { Fragment } from 'react'
import Intro from '../../components/Intro/Intro'
import Navigation from '../../components/navbar/Navigation'

import classes from './header.module.css'

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Navigation />
        <Intro />
      </header>
    </Fragment>
  )
}
export default Header
