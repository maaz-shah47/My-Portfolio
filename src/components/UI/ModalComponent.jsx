import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { FaEnvelope, FaFacebook, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

import classes from './modal.module.css'

const  ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes['modal-container']}>
          <h2 className={classes['modal-heading']}>Syed Maaz Shah</h2>
          <GrClose className='mt-3' style={{cursor: 'pointer'}} onClick={props.handleClose}/>
      </div>
      <div className={classes.divider}></div>
      <div className={`d-flex flex-column ${classes['social-icons']}`}>
        <span><FaLinkedin className={classes.icon} /> Linkedin</span>
        <span><FaGithubSquare className={classes.icon} /> Github</span>
        <span><FaFacebook className={classes.icon} /> Facebook</span>
        <span><FaEnvelope className={classes.icon} /> Email</span>
      </div>
    </div>
  )
}

const ModalComponent = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<ModalOverlay handleClose={props.handleClose} />, document.getElementById('overlays'))}
    </Fragment>
  )
}

export default ModalComponent
