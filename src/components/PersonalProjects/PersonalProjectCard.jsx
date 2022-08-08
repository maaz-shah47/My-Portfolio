import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import classes from './personalProjectCard.module.scss'

const PersonalProjectCard = (props) => {
  return (
    <div className={`card ${classes['card-main']}`}>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">
         {props.body}
        </p>
        <a href="#s" className={`btn btn-lg ${classes['code-btn']}`}><FaGithubSquare /><span>Code</span></a>
      </div>
    </div>
  )
}

export default PersonalProjectCard
