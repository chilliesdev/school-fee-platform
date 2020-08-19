import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import * as yup from "yup"
import { useHistory, useParams } from "react-router-dom"

// components
import { Input, Button, SubHeading, Loading, Alert } from "../../components"

// Redux
import PropTypes from "prop-types"
import { connect } from "react-redux"

// hooks
import { useSecureConnect, useStudentValidationRules } from "../../../hooks"

function Form({ accessToken, userInfo }) {
  const history = useHistory()
  const { userId } = useParams()

  let { create, edit } = useStudentValidationRules()

  const signupSchema = yup.object().shape(userId ? edit : create)

  const { register, handleSubmit, errors, watch, setValue } = useForm({
    resolver: yupResolver(signupSchema)
  })

  // values being watch
  const picture = watch("picture")

  const { post } = useSecureConnect()

  useEffect(() => {
    if (userInfo) {
      setEdit(userInfo)
    }
  }, [userInfo])

  // state
  const [serverError, setServerError] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    picture: "",
    general: ""
  })
  const [loading, setLoading] = useState(false)
  // Store picture sent from server when Editing
  const [pictureValueFromServer, setPictureValueFromServer] = useState("")
  // Store server endpoint
  const [endpoint, setEndpoint] = useState({
    form: "/api/user",
    next: (userId) => "/dashboard/school/create/fee/" + userId
  })

  function setEdit(data) {
    const { name, email, address, picture } = data

    name && setValue("name", name)
    email && setValue("email", email)
    address && setValue("address", address)
    picture && setPictureValueFromServer(picture)

    setEndpoint({
      form: `/api/user/${userId}/edit`,
      next: (userId) => `/dashboard/school/${userId}/edit/fee/`
    })
  }

  const sendFormData = async (data) => {
    setLoading(true)
    const formData = {
      ...data,
      picture: data.picture[0],
      type: 1
    }

    try {
      const response = await post(
        endpoint.form,
        formData,
        accessToken,
        picture.length > 0 ? true : false
      )
      console.log(response)
      const { data } = response
      history.push(endpoint.next(data.id))
    } catch ({ response }) {
      setLoading(false)

      const { data } = response
      switch (response.status) {
        // Unprocessable Entity
        case 422:
          if (data.errors) {
            setServerError({
              ...serverError,
              name: data.errors.name && data.errors.name[0],
              email: data.errors.email && data.errors.email[0],
              password: data.errors.password && data.errors.password[0],
              address: data.errors.address && data.errors.address[0],
              picture: data.errors.picture && data.errors.picture[0]
            })
          }
          break

        default:
          setServerError({
            ...serverError,
            general: "Something went wrong, please try again"
          })
          break
      }
    }
  }

  function onSubmit(data) {
    sendFormData(data)
  }

  const getImageSource = () => {
    return picture
      ? // check if a picture has been uploading and displays it
        picture[0]
        ? URL.createObjectURL(picture[0])
        : // check if a picture was sent from the server
        pictureValueFromServer
        ? "/storage/" + pictureValueFromServer
        : "/images/default-school-img.png"
      : "/images/default-school-img.png"
  }

  return (
    <div className="school-form">
      <div className="grid">
        <SubHeading>Picture</SubHeading>
        <img src={getImageSource()} />
        <Input
          rounded
          name="picture"
          label="change"
          type="file"
          disabled={loading}
          handleChange={register}
          error={errors.picture?.message || serverError.picture}
        />
      </div>
      <div className="grid">
        <SubHeading>Details</SubHeading>
        <form>
          <Input
            rounded
            name="name"
            label="Name"
            placeholder="School Name"
            disabled={loading}
            handleChange={register}
            error={errors.name?.message || serverError.name}
          />
          <Input
            rounded
            name="email"
            type="email"
            label="Email"
            placeholder="example@email.com"
            disabled={loading}
            handleChange={register}
            error={errors.email?.message || serverError.email}
          />
          <Input
            rounded
            name="address"
            label="Address"
            placeholder="Opp. City, State, Country"
            disabled={loading}
            handleChange={register}
            error={errors.address?.message || serverError.address}
          />
          <Input
            rounded
            name="password"
            type="password"
            label="Password"
            placeholder="password"
            disabled={loading}
            handleChange={register}
            error={errors.password?.message || serverError.password}
          />
          <Input
            rounded
            name="conFirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            disabled={loading}
            handleChange={register}
            error={errors.conFirmPassword?.message}
          />
          {serverError.general && (
            <Alert message={serverError.general} type="error" />
          )}
        </form>
      </div>
      <div className="button-grid">
        <Button action={handleSubmit(onSubmit)} disabled={loading}>
          {loading ? <Loading color="default" /> : "Next"}
        </Button>
      </div>
    </div>
  )
}

// props from redux
const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
})

Form.propTypes = {
  accessToken: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Form)
