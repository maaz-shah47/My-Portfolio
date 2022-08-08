import React from 'react'
import ExpertiseCard from './ExpertiseCard'

import ReactGIF from '../../assets/gifs/react-icon.gif'
import JavascriptGIF from '../../assets/gifs/javascript-icon.gif'
import HTML from '../../assets/gifs/html.png'
import CSS from '../../assets/gifs/css3.png'
import RubyonRails from '../../assets/gifs/ruby-on-rails.png'
import BOOTSTRAP from '../../assets/gifs/bootstrap.png'
import REDUX from '../../assets/gifs/redux.png'
import NPM from '../../assets/gifs/npm.png'
import POSTGRES from '../../assets/gifs/postgresql.png'
import NEXTJS from '../../assets/gifs/next.js.png'
import GITHUB from '../../assets/gifs/github.gif'
import DOCKER from '../../assets/gifs/docker.png'

import classes from './expertise.module.scss'
import Heading from '../UI/Heading/Heading'

const data = [
  {
    imgURL: ReactGIF,
    body: 'React JS'
  },
  {
    imgURL: HTML,
    body: 'HTML 5'
  },
  {
    imgURL: JavascriptGIF,
    body: 'JavaScript'
  },
  {
    imgURL: CSS,
    body: 'CSS3'
  },
  {
    imgURL: RubyonRails,
    body: 'Ruby on Rails'
  },
  {
    imgURL: BOOTSTRAP,
    body: 'Bootstrap'
  },
  {
    imgURL: REDUX,
    body: 'Redux'
  },
  {
    imgURL: NPM,
    body: 'NPM'
  },
  {
    imgURL: POSTGRES,
    body: 'PostgreSQL'
  },
  {
    imgURL: NEXTJS,
    body: 'Next JS'
  },
  {
    imgURL: GITHUB,
    body: 'Github'
  },
  {
    imgURL: DOCKER,
    body: 'Docker'
  },
]
const Expertise = () => {
  return (
    <div className={classes['expertise-main']}>
      <Heading txt="My Expertise" />
      <div className={`container-fluid ${classes['expertise-icons-container']}`}>
        <div className='row'>
          {data.map((item, index) => {
            return (
              <div className={`col-6 col-md-6 col-lg-3`}>
                <ExpertiseCard imgURL={item.imgURL} body={item.body}/>
              </div>
            )})}
        </div>
      </div>
    </div>
  )
}

export default Expertise
