import React from 'react'
import { FaFacebook, FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa"

import classes from './footer.module.scss'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10'>
            <h2 className={classes['footer-heading']}>Reach Out to me!</h2>
            <p className={classes['footer-para']}>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</p>
            <p className={classes['footer-skills']}>Full Stack Web Developer & Blockchain Developer</p>
            <div className={classes['icons-container']}>
              <a href='https://www.facebook.com/maaz.shah.7796' target='_blank' rel='noreferrer' className={`${classes['btn-icon-only']} ${classes.facebook} rounded-circle btn btn-twitter`}>
                <span class="btn-inner--icon"><FaFacebook /></span>
              </a>

                <a href='https://github.com/maaz-shah47' target='_blank' rel='noreferrer' className={`${classes['btn-icon-only']} ${classes.github} rounded-circle btn btn-twitter`}>
                  <span class="btn-inner--icon"><FaGithubSquare /></span>
                </a>

                <a href='https://www.linkedin.com/in/maaz-shah-847991196/' target='_blank' rel='noreferrer' className={`${classes['btn-icon-only']} ${classes.linkedin} rounded-circle btn btn-twitter`}>
                  <span class="btn-inner--icon"><FaLinkedin /></span>
                </a>

                <a href='mailto:s.tech4747@gmail.com' className={`${classes['btn-icon-only']} ${classes.email} rounded-circle btn btn-twitter`}>
                  <span class="btn-inner--icon"><FaEnvelope /></span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
