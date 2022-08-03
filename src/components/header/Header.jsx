import React, { Fragment } from 'react'
import Intro from '../Intro/Intro'
import Navigation from '../navbar/Navigation'

import classes from './header.module.css'

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Navigation />
        <Intro />
      </header>
      <main style={{height: '100vh'}}>
      </main>
    </Fragment>
  )
}
export default Header
