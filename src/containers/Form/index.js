import React, { useEffect, useState } from 'react'
import { SmartToaster, toast } from 'react-smart-toaster'

import Form from '../../components/Form';
import { serializerParams } from '../../services/serializer'
import { getClientIp } from '../../services/ipAdress'

const FormContainer = () => {
  const [ipAdress, setIpAdress] = useState('')
  const [userData, setUserData] = useState({})
  const [childs, setChilds] = useState(1)
  const [step, setStep] = useState(1)

  const getApi = async () => {
    const ipAdress = await getClientIp()

    setIpAdress(ipAdress)
  }

  useEffect(async () => {
    getApi()
  })

  const sendToGoggleSheets = async (stringParams) => {
    const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbxGjwnbPEg3xnX-i-nc1V4X4F50Z8tbi6nk_hwbAE3Mo3I4JAIjLS12_5EdR8eSZGRZXQ/exec'

    try {
      await fetch(`${googleSheetsUrl}?${stringParams}`, {
        mode: 'no-cors',
        method: 'GET'
      })
    } catch(err) {
      toast.warning("Something went wrong. Try again, please")
    }
  }

  const buildNewUserData = (params) => {
    return {...userData, ...params, ip: ipAdress}
  }

  const commonThingsForSendData = (newUserData) => {
    setStep(step + 1)
    sendToGoggleSheets(serializerParams(newUserData))
  }

  const sendDataAndNext = (params) => {
    const newUserData = buildNewUserData(params)

    commonThingsForSendData(newUserData)
    setUserData(newUserData)
  }

  const sendForFinishStep = params => {
    commonThingsForSendData(buildNewUserData(params))
    toast.success("Your data saved successfully")
    setUserData({})
  }

  return (
    <>
      <SmartToaster store={toast} lightBackground={true} position={"top_right"} />
      <Form
        userData={userData}
        step={step}
        goToNextStep={() => setStep(step + 1)}
        goToBackStep={() => setStep(step - 1)}
        childs={childs}
        addChild={() => setChilds(childs + 1)}
        removeChild={() => setChilds(childs - 1)}
        sendDataAndNext={sendDataAndNext}
        sendForFinishStep={sendForFinishStep}
      />
    </>
  )
}

export default FormContainer