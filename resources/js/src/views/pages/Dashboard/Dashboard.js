import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router-dom"

// redux
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Components
import {
  Card,
  Button,
  List,
  PageHeading,
  PageHeader,
  PageContent,
  SubHeading,
  Modal,
  Input
} from "../../components"

// hooks
import { useSecureConnect, useThousand } from "../../../hooks"

// icons
import { BsExclamationCircleFill } from "react-icons/bs"

function Dashboard({ accessToken, userDetails }) {
  const { register, handleSubmit, errors } = useForm()
  const { get, post } = useSecureConnect()

  const [dashboardData, setDashboardData] = useState({
    balance: 0,
    today: 0,
    month: 0,
    all: 0,
    account: {},
    payment: [],
    withdraw: []
  })
  const [loading, setLoading] = useState(false)

  const { account } = dashboardData

  useEffect(() => {
    getDataFromServer()
  }, [])

  const getDataFromServer = async () => {
    try {
      const { data } = await get("/api/dashboard", accessToken)
      setDashboardData(data)
    } catch (e) {
      console.log(e.response)
    }
  }

  function onSubmit(formData) {
    setLoading(true)
    requestWithdraw(formData)
  }

  const requestWithdraw = async (formData) => {
    try {
      const { data } = await post(
        "/api/payment/withdraw",
        formData,
        accessToken
      )
      console.log(data)
      // setDashboardData(data)
    } catch (e) {
      console.log(e.response)
    }
  }

  const withdarwSturture = (data) => {
    let newStructure = []
    data.map((row) => {
      const { id, name, amount, created_at, label } = row

      if (!label) {
        let tempRow = {
          id: id,
          // label: name,
          additionalData: [useThousand(`₦${amount}`), created_at]
        }
        newStructure.push(tempRow)
      } else {
        newStructure.push(row)
      }
    })
    return newStructure
  }

  const paymentSturture = (data) => {
    let newStructure = []
    data.map((row) => {
      const { id, name, amount, created_at, label } = row

      if (!label) {
        // If it as has not been structured
        let tempRow = {
          id: id,
          label: name,
          additionalData: [row.class, useThousand(`₦${amount}`), created_at],
          button: "Invoice"
        }
        newStructure.push(tempRow)
      } else {
        newStructure.push(row)
      }
    })
    return newStructure
  }

  const WithdrawalList = () => {
    return (
      <div className="withdrawal-list">
        <SubHeading>Withdrawals</SubHeading>
        <List
          pagination={{
            status: true,
            structure: withdarwSturture,
            accessToken: accessToken
          }}
          size="sm"
          card
          listItems={dashboardData.withdraw}
        />
      </div>
    )
  }

  const PaymentList = () => {
    return (
      <div className="transaction-list">
        <div className="heading">
          <SubHeading>Latest Payment</SubHeading>
          <Button classes="sm">MORE</Button>
        </div>
        <List
          pagination={{
            status: true,
            structure: paymentSturture,
            loadMoreDistructure: (data) => data.payment,
            accessToken: accessToken
          }}
          listItems={dashboardData.payment}
          size="lg"
        />
      </div>
    )
  }

  const Monitor = (props) => {
    return (
      <div className="monitor">
        <SubHeading>Transaction in Numbers</SubHeading>
        <div className="card-group">
          <Card
            figure={`₦${useThousand(props.balance)}`}
            // animate
            label="balance"
          />
          <Card figure={props.all} label="all" />
          <Card figure={props.today} label="today" />
          <Card figure={props.month} label="this month" />
        </div>
      </div>
    )
  }

  return (
    <>
      {userDetails.type === "admin" ? (
        <Redirect from={"/dashboard"} to={`/dashboard/school`} />
      ) : (
        <div className="dashboard">
          <PageHeader>
            <PageHeading>Dashboard</PageHeading>
            <Modal
              title="Withdraw"
              disabled={Object.keys(account).length > 0 ? loading : true}
              loading={loading}
              handleClick={handleSubmit(onSubmit)}
            >
              <div className="withdraw-container">
                {Object.keys(account).length > 0 ? (
                  <>
                    <SubHeading>Account Details</SubHeading>
                    <p>{account.name}</p>
                    <p>{account.bank_name}</p>
                    <p>{account.account_number}</p>
                    <form
                      className="withdraw-form"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Input
                        rounded
                        type="number"
                        name="amount"
                        handleChange={register({
                          required: "Please add a valid amount"
                        })}
                        placeholder="Amount"
                        error={errors.amount?.message}
                      />
                    </form>
                  </>
                ) : (
                  <p className="bank-error">
                    <span>
                      <BsExclamationCircleFill />
                    </span>
                    Unable To Withdraw due to invalid account details please
                    contact the Admin
                  </p>
                )}
              </div>
            </Modal>
          </PageHeader>
          <PageContent>
            <div className="grid lg">
              <Monitor {...dashboardData} />
              <PaymentList />
            </div>
            <div className="grid sm">
              <WithdrawalList />
            </div>
          </PageContent>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
})

Dashboard.propTypes = {
  accessToken: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Dashboard)
