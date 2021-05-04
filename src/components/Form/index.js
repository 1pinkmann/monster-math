import React from 'react';
import './style.css';
import FirstStepOfForm from './FirstStep'
import FourthStepOfForm from './FourthStep'


const FormComponent = ({ userData, step, sendDataAndNext, id, state, setUserData }) => {

    if (step === 1) {
        return (
            <FirstStepOfForm userData={userData} sendDataAndNext={sendDataAndNext} id={id} state={state} setUserData={setUserData} />
        );
    }

    if (step === 2) {
        return (
            <FourthStepOfForm id={id} />
        );
    }
}

export default FormComponent
