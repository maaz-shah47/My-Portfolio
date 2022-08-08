import React from 'react'
import Expertise from '../../components/Expertise/Expertise'
import PersonalProjects from '../../components/PersonalProjects/PersonalProjects'
import WhatIDo from '../../components/WhatIDo/WhatIDo'

const Index = () => {
  return (
    <div className='container'>
      <WhatIDo />
      <Expertise />
      <PersonalProjects />
    </div>
  )
}

export default Index
