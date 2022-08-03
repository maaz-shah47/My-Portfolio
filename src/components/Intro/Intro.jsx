import React from 'react'
import MainImage from '../../assets/images/my-image.jpg'
import facebookIcon from '../../assets/images/facebook.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import githubIcon from '../../assets/images/github.png'
import mailIcon from '../../assets/images/mail.png'

import MyResume from '../../assets/documents/resume.pdf'

import classes from './intro.module.scss'

const Intro = () => {
  return (
    <div className={`container ${classes['intro-main-container']}`}>
      <div className={classes['intro-section']}>
        <div className={classes['intro-content']}>
          <h1 className={classes['intro-main-heading']}>Hi, I am Maaz</h1>
          <p className={classes['intro-main-content']}>
            I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.
          </p>

          <div className={classes.icons}>
            <span><img className={classes.icon} src={linkedinIcon} alt="Linked In" /></span>
            <span><img className={classes.icon} src={githubIcon} alt='Github' /></span>
            <span><img className={classes.icon} src={facebookIcon} alt='Facebook' /></span>
            <span><img className={classes.icon} src={mailIcon} alt='Email' /></span>
          </div>
          <div className={classes['btn-div']}>
            <a className='btn btn-secondary btn-lg' href={MyResume} download="My_File.pdf">Download Resume Here </a>
          </div>
        </div>
        <div className={classes['intro-img-section']}>
          <img className={classes['main-img']} src={MainImage} alt='Main' />
        </div>
      </div>
    </div>
  )
}
export default Intro
