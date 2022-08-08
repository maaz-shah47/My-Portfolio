import React from 'react'

import classes from './expertiseCard.module.css'

const ExpertiseCard = (props) => {
  return (
    <div className={`${classes.cards} second p-4 text-center`}>
      <img src={props.imgURL} alt='card' className={classes.icon}/>
      <h3 className={classes.line}>{props.body}</h3>
    </div>
  )
}

export default ExpertiseCard
