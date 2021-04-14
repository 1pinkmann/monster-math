import React from 'react'

import Button from '../atoms/Button'

const FirstStep = () => {
  const openScheduleLink = () => {
    window.open('https://calendly.com/monstereducation/introduction-call-public-speaking-life-skills')
  }

  return (
    <form className="form position-absolute">
      <h3>Schedule a call with out education expert:</h3>

      <div className='form-footer'>
          <div className='form-footer-top-space-for-element form-footer-horizontal-buttons'>
            <Button fullWidth type='button' onClick={openScheduleLink} >Click here to schedule a call</Button>
          </div>
        </div>
    </form>
  )
}

export default FirstStep
