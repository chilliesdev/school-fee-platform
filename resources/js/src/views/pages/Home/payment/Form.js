import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

// components
import { Input, Button, Select, Loading } from '../../../components'
import ConfirmDialog from './ConfirmDialog'

// custom Hooks
import { useThousand } from '../../../../hooks'

// icons
import { FaSearch } from 'react-icons/fa'

export default function Form () {
  const { register: formInput, watch, setValue, handleSubmit, errors } = useForm()

  // Form values being watched
  const watchSchool = watch('school')
  const watchFeeName = watch('fee')

  // state
  const [disabledButton, setDisabledButton] = useState(true)
  const [paymentConst, setPaymentConst] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [allFormData, setAllFormData] = useState([])
  const [selectedSchoolInfo, setSelectedSchoolInfo] = useState([])
  const [selectedFee, setSelectedFee] = useState([])
  const [loading, setLoading] = useState(false)
  const [redirectToInvoice, setRedirectToInvoice] = useState(false)

  // To disable submit button if their is an error
  useEffect(() => {
    // Mange button disabled
    (errors.school || errors.name || errors.class || errors.email) 
    ? setDisabledButton(true)
    : setDisabledButton(false) 
  })

  useEffect(() => {
    // when school or fee is selected
    watchSchool && handleOnSchoolSelect(watchSchool)
    watchFeeName && handleFeeSelect(watchFeeName)
  } ,[watchSchool,watchFeeName])

  // To get payment constants
  const getPaymentConstants = async () => {
    try {
      let response = await axios.get('api/pay/constant')
      let { data } = response
      setPaymentConst(data)
    } catch(error) {
      console.error(error.response)
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
      required: "Your email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Enter a valid e-mail address",
      },
    },
    fee: {
      required: true
    },
    amount: {
      required: true
    },
  }

  const toggleDialog = () => setOpenDialog(!openDialog)
  const toggleLoading = () => setLoading(!loading)

  function processPayment(response) {
    setOpenDialog(false)
    toggleLoading()
    // disable disable scroll property in body element
    setAllFormData(prevAllFormData => ({
      ...prevAllFormData,
      ...response
    }))

    sendToServer()
  }

  const sendToServer = async () => {
    try {
      let response = await axios.post('api/payment/callback',allFormData)
      let { data } = response
      setRedirectToInvoice(true)
    } catch(error) {
      console.error(error.response)
    }
  }

  const openConfirmDialogue = data => {
    toggleDialog()
    setAllFormData({
      ...data,
      amount: Number(selectedFee.amount) * 100,
      reference: (new Date()).getTime(),
      currency: paymentConst.currency,
      publicKey: paymentConst.publicKey,
      onSuccess: res => processPayment(res),
    })
  }

  const handleOnSchoolSelect = id => {
    if (id !== 'placeholder'){
      let allSchools = paymentConst.schools
      let tempSelctedSchool = allSchools.filter( school => school.id == id)
      setSelectedSchoolInfo(...tempSelctedSchool)
    }
  }
  
  const handleFeeSelect = id => {
    if (id !== 'placeholder'){
      let allFees = selectedSchoolInfo.fees
      let tempSelectedFee = allFees.filter( fee => fee.id == id)
      setSelectedFee(...tempSelectedFee)

      setValue('amount',useThousand(tempSelectedFee[0].amount))
    }
  }

  return <>
    {loading ? <Loading color="default" size="lg" background="full"/> : null}
    {redirectToInvoice && <Redirect
      to={{
        pathname: '/invoice',
        invoiceData: allFormData
      }}
    />}
    <form>
      <Select
        placeholder="YOUR SCHOOL NAME"
        icon={<FaSearch/>}
        size="lg"
        name="school"
        options={paymentConst ? paymentConst.schools : null}
        handleChange={formInput(inputRequirement.school)}
        error={errors.school && errors.school.message}
      />
      <Select
        placeholder="SELECT A FEE"
        // icon={<FaSearch/>}
        label="Fee"
        name="fee"
        options={selectedSchoolInfo ? selectedSchoolInfo.fees : null}
        handleChange={formInput(inputRequirement.fee)}
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
        error={errors.email && errors.email.message}
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
      allFormData={allFormData}
      school={selectedSchoolInfo}
      fee={selectedFee}
    />
  </>
}