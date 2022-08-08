import React, { useEffect, useState } from 'react'
import MainImage from '../../assets/images/my-image.jpg'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import MyResume from '../../assets/documents/resume.pdf'

import classes from '../../Pages/Footer/footer.module.scss'
import './intro.scss'
import '../AnimatedLetters/animatedLetters.scss'
import { FaEnvelope, FaFacebook, FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Intro = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['I',"'", 'm', ' ','S','y','e','d',' ' ,'M', 'a', 'a', 'z', ' ', 'S', 'h', 'a', 'h']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className='container intro-main-container'>
      <div className='intro-section'>
        <div className='intro-content'>
          <h1 className='intro-main-heading'>
            <span className={letterClass}>H</span>
            <span className={letterClass}>i</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <span className='intro-main-content'>
            Full stack web developer | Ruby on Rail Developer
          </span>

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
          <div className='btn-div'>
            <a className='btn btn-secondary btn-lg' href={MyResume} download="My_File.pdf">Download Resume Here </a>
          </div>
        </div>
        <div className='intro-img-section'>
          <img className='main-img' src={MainImage} alt='Main' />
        </div>
      </div>
    </div>
  )
}
export default Intro
