import React, { useEffect, useState } from 'react'
import { SmartToaster, toast } from 'react-smart-toaster'

import Form from '../../components/Form';
import { serializerParams } from '../../services/serializer'
import { getClientIp } from '../../services/ipAdress'

const FormContainer = ({id}) => {
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
  // new https://script.google.com/macros/s/AKfycbwJ9H88mHG6x2w8IGDOZocYyZCciZ4SUDmC-SfbuDjgCILgeQNsqpw7L9rqldSjLEJskg/exec
  // https://script.google.com/macros/s/AKfycbwPfO3SFDbsqwZ0mFuhUvlIdZZh37USZ0abhxeprgs0UKwKOAC3O7kpBEteZFBq6zAKCQ/exec
  const sendToGoggleSheets = async (stringParams) => {
    const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbzOh_xEOlzoL3jZ22EQM373PPr7XbI1kpi749NkJjbMd9x3JBOxd7y3vayog3tZde_VaA/exec'

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
    return {...userData, ...params, ip: ipAdress, type: 'Math'}
  }

  const commonThingsForSendData = (newUserData) => {
    setStep(step + 1)
    sendToGoggleSheets(serializerParams(newUserData))
  }

  const sendDataAndNext = (params) => {
    const newUserData = buildNewUserData(params)
    commonThingsForSendData(newUserData)
    setUserData(newUserData)
    window.dataLayer.push({'event': 'formsend'});
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
        id={id}
      />
    </>
  )
}

export default FormContainer
