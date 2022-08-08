import React from 'react'
import {
  faDocker,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './whatIDo.module.scss'
import Heading from '../UI/Heading/Heading'

const WhatIDo = () => {
  return (
    <div className={`text-center ${classes['wid-main']}`}>
      <Heading txt="What I do" />
      <p className='text-muted'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-7'>
            <p className={classes['about-para']}>
            I have done my BS in computer science from National University of Sciences and Technology.
            I have a solid knowledge of programming and my works are enchanting and integrated with graphics, video, and audio. I am also skillful in ReactJS, Vanila JS, Bootstrap, CSS, XML, HTML, HTML5, Material UI, Ruby on Rails, SQL</p>

            <p className={classes['about-p']}>
              ⚡ Building SSR websites with Next.js
              <br />
              ⚡ Building responsive static websites
              <br />
              ⚡ Building RESTful APIs in Ruby on Rails
              <br />
              ⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js
            </p>
          </div>
          <div className='col-md-5'>
            <div className={classes['stage-cube-cont']}>
            <div className={classes.cubespinner}>
              <div className={classes.face1}>
                <FontAwesomeIcon icon={faDocker} color="#DD0031" />
              </div>
              <div className={classes.face2}>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className={classes.face3}>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className={classes.face4}>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className={classes.face5}>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className={classes.face6}>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WhatIDo
