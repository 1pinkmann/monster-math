import React from 'react'
import { Form, Field } from 'react-final-form'

import Textarea from '../atoms/Textarea'
import Button from '../atoms/Button'
import { required } from '../../services/fieldLevelValidation'

const ThirdStep = ({ userData, sendForFinishStep, goToBackStep, id }) => {
  return (
    <Form initialValues={userData} onSubmit={sendForFinishStep} render={({ handleSubmit, invalid, form }) => {
      return (
        <form className="form position-absolute" id={id} onSubmit={event => {
          handleSubmit(event)
          form.reset()
        }}>
          <h3>Contact Us to Apply</h3>

          <Field
            name='message'
            placeholder='Type your message & questions'
            component={Textarea}
            validate={required} />

          <div className='form-footer'>
            <div className='form-footer-horizontal-buttons'>
              <Button type='button' onPress={goToBackStep} isOutline>Back</Button>
              <Button type='submit' isDisabled={invalid}>Next</Button>
            </div>
          </div>
        </form>
      )
    }} />
  )
}

export default ThirdStep
