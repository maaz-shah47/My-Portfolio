import React from 'react'
import Heading from '../UI/Heading/Heading'
import PersonalProjectCard from './PersonalProjectCard'

import classes from './personalProjects.module.scss'

const data = [
  {
    title: 'Special title treatment',
    body: 'With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.'
  },
  {
    title: 'Special title treatment',
    body: 'With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.'
  },
  {
    title: 'Special title treatment',
    body: 'With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.'
  },
  {
    title: 'Special title treatment',
    body: 'With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.'
  }
]
const PersonalProjects = () => {
  return (
    <div className={classes['personal-projects-main']}>
      <Heading txt="Personal Projects" />

      <div className={`container-fluid ${classes['projects-div']}`}>
        <div className='row'>
          {data.map((item, index) => {
            return (
              <div className='col-md-6'>
                <PersonalProjectCard title={item.title} body={item.body}/>
              </div>
            )})}
        </div>
      </div>
    </div>
  )
}

export default PersonalProjects
