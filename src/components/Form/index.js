import React from 'react'
import { InlineWidget } from "react-calendly";

import FirstStepOfForm from './FirstStep'
// import SecondStepOfForm from './SecondStep'
// import ThirdStepOfForm from './ThirdStep'
// import FourthStepOfForm from './FourthStep'

import './style.css';

const FormComponent = ({ userData, sendForFinishStep, goToBackStep, step, childs, addChild, removeChild, sendDataAndNext, id }) => {
  if (step === 1) return <FirstStepOfForm userData={userData} sendDataAndNext={sendDataAndNext} id={id} />
  if (step === 2) {
    return (
      <InlineWidget url="https://calendly.com/monstereducation/singapore_math" />
      // <SecondStepOfForm
      //   userData={userData}
      //   sendDataAndNext={sendDataAndNext}
      //   childs={childs}
      //   goToBackStep={goToBackStep}
      //   addChild={addChild}
      //   removeChild={removeChild}
      //   id={id} />
    )
  }
  // if (step === 3) return <ThirdStepOfForm userData={userData} sendForFinishStep={sendForFinishStep} goToBackStep={goToBackStep} id={id} />
  // if (step === 4) return <FourthStepOfForm id={id} />
}

export default FormComponent
