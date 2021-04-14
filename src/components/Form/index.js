import React from 'react'

import FirstStepOfForm from './FirstStep'
import SecondStepOfForm from './SecondStep'
import ThirdStepOfForm from './ThirdStep'
import FourthStepOfForm from './FourthStep'

import './style.css';

const FormComponent = ({ userData, sendForFinishStep, goToBackStep, step, childs, addChild, removeChild, sendDataAndNext }) => {
  if (step === 1) return <FirstStepOfForm userData={userData} sendDataAndNext={sendDataAndNext} />
  if (step === 2) {
    return (
      <SecondStepOfForm
        userData={userData}
        sendDataAndNext={sendDataAndNext}
        childs={childs}
        goToBackStep={goToBackStep}
        addChild={addChild}
        removeChild={removeChild} />
    )
  }
  if (step === 3) return <ThirdStepOfForm userData={userData} sendForFinishStep={sendForFinishStep} goToBackStep={goToBackStep} />
  if (step === 4) return <FourthStepOfForm />
}

export default FormComponent
