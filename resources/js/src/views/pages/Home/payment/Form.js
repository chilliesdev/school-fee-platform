import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

// components
import { Input, Button } from '../../../components'
import ConfirmDialog from './ConfirmDialog'

// icons
import { FaSearch } from 'react-icons/fa'

export default props => {
  const { register: formInput, handleSubmit, errors } = useForm()

  // state
  const [ disabledButton, setDisabledButton ] = useState(true)
  const [paymentConst, setPaymentConst] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [paymentData, setPaymentData] = useState([])

  function checkAllErrors() {
    if (errors.school || errors.name || errors.class || errors.email) { return true }

    return false
  }

  // To disable submit button if their is an error
  useEffect(() => {
    (checkAllErrors()) 
    ? setDisabledButton(true) 
    : setDisabledButton(false)
  })

  // To get payment constants
  const getPaymentConstants = async () => {
    try {
      let response = await axios.get('api/pay/constant')
      let { data } = response
      setPaymentConst(data)
    } catch(error) {
      conole.error(error.detail)
      // If their was an error retry
      setTimeout(() => {
        getPaymentConstants()
      }, 3000);
    }
  }

  useEffect(() => {
    getPaymentConstants()
  }, [])

  // Input Requirements
  const inputRequirement = {
    school: {
      required: true
    },
    name: {
      required: true
    },
    class: {
      required: true
    },
    email: {
      required: true
    },
  }

  const toggleDialog = () => setOpenDialog(!openDialog)

  function openConfirmDialogue(data) {
    toggleDialog()
    setPaymentData(data)
  }

  function sendPaymentRequest() {
    console.log('paymentData')
  }

  return <>
    <form>
      <Input
        placeholder="YOUR SCHOOL NAME"
        icon={<FaSearch/>}
        size="lg"
        name="school"
        handleChange={formInput(inputRequirement.school)}
        error={errors.school && errors.school.message}
      />
      <Input
        label="Full Name"
        placeholder="YourName YourSurname"
        name="name"
        handleChange={formInput(inputRequirement.name)}
        // error={errors.name && errors.name.message}
      />
      <Input
        label="Class"
        name="class"
        handleChange={formInput(inputRequirement.class)}
        // error={errors.class && errors.class.message}
        placeholder="Eg. Primary 5"
      />
      <Input
        label="Email"
        name="email"
        handleChange={formInput(inputRequirement.email)}
        // error={errors.email && errors.email.message}
        placeholder="Eg. example@example.com"
      />
      <Button 
        type="submit"
        action={handleSubmit(openConfirmDialogue)}
        disabled={disabledButton}
      >Pay</Button>
    </form>
    <ConfirmDialog 
      open={openDialog} 
      toggleOpen={toggleDialog} 
      onConfirm={sendPaymentRequest}
    />
  </>
}