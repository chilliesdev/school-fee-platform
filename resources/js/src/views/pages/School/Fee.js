import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"

// Redux
import PropTypes from "prop-types"
import { connect } from "react-redux"

// components
import { List, SubHeading, Loading, Button, Alert } from "../../components"

// custom hooks
import { useSecureConnect } from "../../../hooks"

// icons
import { IoMdClose } from "react-icons/io"

function Fee({ accessToken, feeList }) {
  const { userId } = useParams()
  const history = useHistory()

  const { post, deleteRequest } = useSecureConnect()

  function checkFeeListProp() {
    return feeList ? (feeList.length > 0 ? true : false) : false
  }

  useEffect(() => {
    checkFeeListProp() && mapFeeToForm()
  }, [feeList])

  // state
  const [loading, setLoading] = useState(false)
  const [allListId, setallListId] = useState([1])
  const [errors, setErrors] = useState({})
  // Store server endpoint
  const [endpoint, setEndpoint] = useState({
    form: `/api/fee/${userId}`,
    next: (userId) => `dashboard/school/create/account/${userId}`
  })
  const [serverError, setServerError] = useState({
    general: ""
  })
  const [fees, setFees] = useState({
    name_1: "",
    amount_1: ""
  })

  function mapFeeToForm() {
    let tempFeeId = []
    let tempFees = {}
    feeList.map(({ id, amount, name }) => {
      tempFeeId.push(id)
      ;(tempFees[`name_${id}`] = name), (tempFees[`amount_${id}`] = amount)
    })

    setallListId(tempFeeId)
    setFees(tempFees)
    setEndpoint({
      form: `/api/fee/${userId}/edit`,
      next: (userId) => "/dashboard/school"
    })
  }

  function addallListId() {
    setallListId((prevAllListId) => {
      let numId = prevAllListId[prevAllListId.length - 1]
      numId++

      // initailize the new id in the state
      setFees({
        ...fees,
        [`name_${numId}`]: "",
        [`amount_${numId}`]: ""
      })

      return [...prevAllListId, numId]
    })
  }

  function removeListId(id) {
    const removeIdFromList = () => {
      let newAllListId = allListId.filter((value) => value !== id)
      setallListId(newAllListId)
    }

    const removeFeeFromList = () => {
      const newFees = fees
      const toRemove = [`name_${id}`, `amount_${id}`]

      Object.keys(newFees)
        .filter((key) => toRemove.includes(key))
        .forEach((key) => delete newFees[key])

      setFees(newFees)
    }

    const deleteFromServer = async () => {
      try {
        await deleteRequest(`/api/fee/${id}`, accessToken)
      } catch (e) {
        console.error(e)
      }
    }

    if (allListId.length > 1) {
      removeIdFromList()
      removeFeeFromList()
      // if the data is coming from the server
      checkFeeListProp() && deleteFromServer()
    }
  }

  function validate() {
    let tempErrors = {}

    const setTempError = (name, message) => {
      tempErrors = {
        ...tempErrors,
        [name]: message
      }
    }

    const checkEmpty = (name = "", value = 0) => {
      const removeId = () => name.substring(0, name.length - 2)

      value.length < 1 && setTempError(name, `Fee ${removeId()} is required`)
    }

    const validateAmountisPositive = (name = "", value = 0) => {
      if (name.substring(0, 7) === "amount_") {
        let newValue = Number(value)

        newValue < 0 && setTempError(name, "Amount most be greater than zero")
      }
    }

    for (let key in fees) {
      checkEmpty(key, fees[key])
      validateAmountisPositive(key, fees[key])
    }

    // If there is an error add it to the state
    if (Object.keys(tempErrors).length > 0) {
      return setErrors(tempErrors)
    } else {
      setErrors({})
      return fees
    }
  }

  const sendToServer = async (formData) => {
    setLoading(true)

    try {
      await post(endpoint.form, formData, accessToken)
      setLoading(false)
      // history.push(endpoint.next(userId))
      history.push("/dashboard/school")
    } catch ({ response }) {
      console.error(response)
      setLoading(false)

      const { data, status } = response

      switch (status) {
        // Unprocessable Entity
        case 422:
          if (data.errors) {
            // very unlikely
            console.error("serve error")
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

  function handleSubmit() {
    const formData = validate()

    formData && sendToServer(formData)
  }

  return (
    <div className="school-form fee">
      <div className="grid">
        <SubHeading>
          <span>Fees</span>
          <Button action={addallListId} disabled={loading}>
            Add
          </Button>
        </SubHeading>
        <List size="sm" card disableLoading>
          {serverError.general && (
            <Alert message={serverError.general} type="error" />
          )}
          {allListId.map((id) => (
            <li key={id} className="list-item sm fee-list-item">
              <button
                className="close-icon btn"
                onClick={() => removeListId(id)}
                disabled={allListId.length < 2 ? true : false || loading}
              >
                <IoMdClose />
              </button>
              <div className="input-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name={`name_${id}`}
                  id={`name_${id}`}
                  className="input-rounded"
                  placeholder="Fee Name"
                  value={fees[`name_${id}`]}
                  onChange={(e) => {
                    setFees({
                      ...fees,
                      [e.target.name]: e.target.value
                    })
                  }}
                  disabled={loading}
                />
                {errors && errors[`name_${id}`] && (
                  <Alert message={errors[`name_${id}`]} type="error" />
                )}
              </div>
              <div className="input-group">
                <label htmlFor="">Amount</label>
                <input
                  type="number"
                  name={`amount_${id}`}
                  id={`amount_${id}`}
                  className="input-rounded"
                  placeholder="Fee Amount"
                  value={fees[`amount_${id}`]}
                  onChange={(e) => {
                    setFees({
                      ...fees,
                      [e.target.name]: e.target.value
                    })
                  }}
                  disabled={loading}
                />
                {errors && errors[`amount_${id}`] && (
                  <Alert message={errors[`amount_${id}`]} type="error" />
                )}
              </div>
            </li>
          ))}
        </List>
      </div>
      <div className="button-grid">
        <Button action={handleSubmit} disabled={loading}>
          {loading ? <Loading color="default" /> : "Next"}
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
})

Fee.propTypes = {
  accessToken: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Fee)
