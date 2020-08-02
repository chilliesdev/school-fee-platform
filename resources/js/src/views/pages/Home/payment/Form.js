import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

// components
import { Input, Button, Select } from '../../../components'
import ConfirmDialog from './ConfirmDialog'

// icons
import { FaSearch } from 'react-icons/fa'

export default props => {
  const { register: formInput, handleSubmit, errors } = useForm()

  // state
  const [ disabledButton, setDisabledButton ] = useState(true)
  const [paymentConst, setPaymentConst] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [allFormData, setAllFormData] = useState([])
  const [selectedSchoolInfo, setSelectedSchoolInfo] = useState([])
  const [selectedFee, setSelectedFee] = useState([])

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
    feeName: {
      required: true
    },
    amount: {
      required: true
    },
  }

  const toggleDialog = () => setOpenDialog(!openDialog)

  function openConfirmDialogue(data) {
    toggleDialog()
    setAllFormData(data)
  }

  function sendPaymentRequest() {
    console.log('paymentData')
  }

  const handleOnSchoolSelect = e => {
    console.log('selected')
    let allSchools = paymentConst.schools
    let selectedSchool = allSchools.filter(({ id }) => id === e.target.value)
    setSelectedSchoolInfo(selectedSchool)
  }
  
  const handleFeeSelect = e => {
    let allFees = selectedSchoolInfo.fees
    let selectedFee = allFees.filter(({ id }) => id === e.target.value)
    setSelectedFee(selectedFee)
  }

  return <>
    <form>
      <Select
        placeholder="YOUR SCHOOL NAME"
        icon={<FaSearch/>}
        size="lg"
        name="school"
        options={paymentConst ? paymentConst.schools : null}
        handleChange={formInput(inputRequirement.school)}
        handleSelect={handleOnSchoolSelect}
        error={errors.school && errors.school.message}
      />
      <Select
        placeholder="SELECT A FEE"
        // icon={<FaSearch/>}
        label="Fee"
        name="feeName"
        options={selectedSchoolInfo ? selectedSchoolInfo.fees : null}
        handleChange={formInput(inputRequirement.feeName)}
        handleSelect={handleFeeSelect}
      />
      <Input
        label="Amount"
        placeholder="NGN"
        value={selectedFee ? selectedFee : null}
        name="amount"
        disabled={true}
        handleChange={formInput(inputRequirement.name)}
        // error={errors.name && errors.name.message}
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