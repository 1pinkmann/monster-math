import React from 'react'
import { Form, Field } from 'react-final-form'

import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Select from '../atoms/Select'
import { required } from '../../services/fieldLevelValidation'

const ageOptions = [
  { label: 5, value: 5 },
  { label: 6, value: 6 },
  { label: 7, value: 7 },
  { label: 8, value: 8 },
  { label: 9, value: 9 },
  { label: 10, value: 10 },
  { label: 11, value: 11 },
  { label: 12, value: 12 },
  { label: 13, value: 13 },
  { label: 14, value: 14 }
]

const gradeOptions = [
  { label: 'K', value: 'K' },
  { label: '1st', value: '1st' },
  { label: '2dn', value: '2dn' },
  { label: '3rd', value: '3rd' },
  { label: '4th', value: '4th' },
  { label: '5th', value: '5th' },
  { label: '6th', value: '6th' },
  { label: '7th', value: '7th' },
  { label: '8th', value: '8th' },
]

const childFields = number => (
  <>
    <Field
      name={`child_${number}_first_name`}
      placeholder="Child's First Name"
      type='text'
      component={Input}
      validate={required} />

    <Field
      name={`child_${number}_last_name`}
      placeholder="Child's Last Name"
      type='text'
      component={Input}
      validate={required} />

    <Field
      name={`child_${number}_age`}
      type='number'
      component={Select}
      options={ageOptions}
      defaultOption="Child's Age"
      validate={required} />

    <Field
      name={`child_${number}_grade`}
      type='text'
      component={Select}
      options={gradeOptions}
      defaultOption="Child's Grade"
      validate={required} />
  </>
)

const SecondStep = ({ userData, sendDataAndNext, goToBackStep, addChild, removeChild, childs, id }) => {
  return (
    <Form initialValues={userData} onSubmit={sendDataAndNext} render={({ handleSubmit, invalid }) => {
      return (
        <form className="form position-absolute" id={id} onSubmit={handleSubmit}>
          <h3>Contact Us to Apply</h3>

          {childFields(1)}
          {childs === 2 && childFields(2)}

          <div className='form-footer'>
            {childs === 2 && <Button type='button' onPress={removeChild} isOutline>Remove Child</Button>}
            {childs === 1 && <Button type='button' onPress={addChild} isOutline>Add Child</Button>}

            <div className='form-footer-top-space-for-element form-footer-horizontal-buttons'>
              <Button type='button' onPress={goToBackStep} isOutline>Back</Button>
              <Button type='submit' isDisabled={invalid}>Next</Button>
            </div>
          </div>
        </form>
      )
    }} />
  )
}

export default SecondStep
