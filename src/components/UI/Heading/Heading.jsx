import React from 'react'

import classes from './heading.module.scss'

const Heading = (props) => {
  return (
    <h2 className={classes.heading}>{props.txt}</h2>
  )
}

export default Heading
