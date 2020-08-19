import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

// components
import {
  PageHeading,
  PageHeader,
  PageContent,
  Button,
  Table,
  Select,
  Modal,
  CheckBox,
  Input
} from "../../components"

// redux
import PropTypes from "prop-types"
import { connect } from "react-redux"

// hooks
import { useSecureConnect, useThousand } from "../../../hooks"

function Transaction({ accessToken }) {
  const { register, handleSubmit } = useForm()
  const { get } = useSecureConnect()
  // const history = useHistory()

  useEffect(() => {
    getDataFromServer()
  }, [])

  const [data, setData] = useState([])
  // const [filterFormData, setFilterFormData] = useState({})

  const getDataFromServer = async (formData = {}) => {
    setData({})
    try {
      const { data } = await get("/api/transaction", accessToken, formData)
      setData({ ...data, refresh: true })
    } catch (e) {
      console.log(e.response)
    }
  }

  const dataStructure = (data) => {
    let newStructure = []
    data.map((row) => {
      const { id, amount, type, created_at, status } = row
      // If it as has not been structured
      let tempRow = {
        id: id,
        name:
          type === "withdraw"
            ? "-" + useThousand(`₦${amount}`)
            : useThousand(`₦${amount}`),
        items: [type, created_at, status],
        addClass: type === "withdraw" ? "name-danger" : "name-success"
      }
      newStructure.push(tempRow)
    })
    return newStructure
  }

  return (
    <div className="transaction">
      <PageHeader>
        <PageHeading>Transactions</PageHeading>

        <Modal
          title="filter"
          handleClick={handleSubmit((data) => getDataFromServer(data))}
          confirmButton="Filter"
        >
          <div className="filter-container">
            <div className="filter-row">
              <CheckBox
                label="Payment"
                name="payment"
                handleChange={register}
              />
              <CheckBox
                label="Withdraw"
                name="withdraw"
                handleChange={register}
              />
            </div>
            <div className="filter-row">
              <CheckBox label="Today" name="today" handleChange={register} />
              {/* <CheckBox label="This Week" name="week" handleChange={register} /> */}
              <CheckBox
                label="This Month"
                name="month"
                handleChange={register}
              />
            </div>
            <div className="filter-row">
              <CheckBox
                label="Pending"
                name="pending"
                handleChange={register}
              />
              <CheckBox label="Failed" name="failed" handleChange={register} />
            </div>
            <div className="filter-row">
              <Input
                rounded
                type="date"
                label="From"
                name="from"
                handleChange={register}
              />
              <Input
                rounded
                type="date"
                label="To"
                name="to"
                handleChange={register}
              />
            </div>
          </div>
        </Modal>
        <Modal title="Export" handleClick={() => null} confirmButton="Export">
          <div className="export-container">
            <form>
              <Select
                label="File type"
                name="file"
                options={[
                  { id: 1, name: "PDF" },
                  { id: 2, name: "XLS" }
                ]}
              />
            </form>
          </div>
        </Modal>
      </PageHeader>
      <PageContent>
        <Table
          heading={["amount", "type", "time", "status"]}
          body={data}
          pagination={{
            status: true,
            structure: dataStructure,
            loadMoreDistructure: (data) => data,
            accessToken: accessToken,
            requestType: "get"
          }}
        />
      </PageContent>
    </div>
  )
}

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
})

Transaction.propTypes = {
  accessToken: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Transaction)
