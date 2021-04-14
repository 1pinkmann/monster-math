import React from 'react'
import { Form, Field } from 'react-final-form'

import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { composeValidators, required, email, phoneNumber } from '../../services/fieldLevelValidation'

const FirstStep = ({ userData, sendDataAndNext }) => {
  return (
    <Form onSubmit={sendDataAndNext} initialValues={userData} render={({ handleSubmit, invalid }) => {
      return (
        <form className="form position-absolute" onSubmit={handleSubmit}>
          <h3>Contact Us to Apply</h3>

          <Field
            name='first_name'
            placeholder='First Name'
            type='text'
            component={Input}
            validate={required} />

          <Field
            name='last_name'
            placeholder='Last Name'
            type='text'
            component={Input}
            validate={required} />

          <Field
            name='email'
            placeholder='Email'
            type='text'
            component={Input}
            validate={composeValidators(required, email)} />

          <Field
            name='phone'
            placeholder='Phone'
            type='tel'
            component={Input}
            validate={composeValidators(required, phoneNumber)}
            autoComplete='nope' />

          <div className="form-footer">
            <div className="flex-end">
              <Button type='submit' isDisabled={invalid}>Next</Button>
            </div>
          </div>
        </form>
      )
    }} />
  )
}

export default FirstStep
