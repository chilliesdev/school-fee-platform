import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"

// redux
import PropTypes from "prop-types"
import { connect } from "react-redux"

// componets
import {
  Input,
  Button,
  SubHeading,
  Loading,
  Alert,
  Select
} from "../../components"

// hooks
import { useSecureConnect } from "../../../hooks"

function Account({ accessToken }) {
  const { register, handleSubmit, errors } = useForm()
  const inputRequirement = {
    bank: {
      required: "Bank name is required"
    },
    account: {
      required: "Account number is required",
      maxLength: {
        value: 10,
        message: "Invalid account number"
      },
      minLength: {
        value: 10,
        message: "Invalid account number"
      }
    }
  }

  const { userId } = useParams()

  const { get } = useSecureConnect()

  const getBank = async () => {
    try {
      const { data } = await get("/api/payment/bank", accessToken)
      console.log(data)
    } catch ({ response }) {
      console.error(response)
      // If their was an error retry
      // setTimeout(() => {
      //   getBank()
      // }, 3000)
    }
  }

  useEffect(() => {
    getBank()
  }, [])

  // state
  const [bank, setBank] = useState([
    { id: 1, bank_code: 55, name: "zenith bank" }
  ])
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState({
    general: ""
  })

  const sendToServer = async (formData) => {
    setLoading(true)
    formData = {
      ...formData,
      user: userId
    }

    // try {
    //   await post(`/payment/verifyAccountNumber`, formData, accessToken)
    //   history.push("/dashboard/school")
    // } catch ({ response }) {
    //   console.error(response)
    //   setLoading(false)

    //   // const { data, status } = response
    //   // const { status } = response

    //   switch (response.status) {
    //     // Unprocessable Entity
    //     case 422:
    //       // if (data.errors) {
    //       // very unlikely
    //       console.error("serve error")
    //       // }
    //       break

    //     default:
    //       setServerError({
    //         ...serverError,
    //         general: "Something went wrong, please try again"
    //       })
    //       break
    //   }
    // }
  }

  function onSubmit(formData) {
    sendToServer(formData)
  }

  return (
    <div className="school-form account">
      <div className="grid">
        <SubHeading>
          <span>Bank Details</span>
        </SubHeading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            rounded
            label="Bank Name"
            placeholder="Select Your Bank"
            name="bank"
            newValue="bank_code"
            options={bank ? bank : null}
            handleChange={register(inputRequirement.bank)}
            error={errors.bank?.message || serverError.name}
          />
          <Input
            rounded
            name="account"
            label="Account Number"
            placeholder="Account Number"
            disabled={loading}
            handleChange={register(inputRequirement.account)}
            error={errors.account?.message || serverError.name}
          />
          {serverError.general && (
            <Alert message={serverError.general} type="error" />
          )}
        </form>
      </div>
      <div className="button-grid">
        <Button
          type="submit"
          disabled={loading}
          action={handleSubmit(onSubmit)}
        >
          {loading ? <Loading color="default" /> : "Next"}
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
})

Account.propTypes = {
  accessToken: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Account)
