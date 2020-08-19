import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

// components
import {
  PageHeading,
  PageHeader,
  PageContent,
  Button,
  Table
} from "../../components"

// redux
import PropTypes from "prop-types"
import { connect } from "react-redux"

// hooks
import { useSecureConnect } from "../../../hooks"

function Index({ accessToken }) {
  const { get } = useSecureConnect()
  const history = useHistory()

  useEffect(() => {
    getDataFromServer()
  }, [])

  const [data, setData] = useState([])

  const getDataFromServer = async () => {
    try {
      const { data } = await get("/api/user", accessToken)
      setData({ ...data, refresh: true })
    } catch (e) {
      console.log(e.response)
    }
  }

  const dataStructure = (data) => {
    // console.log(data)
    let newStructure = []
    data.map((row) => {
      const { id, name, email, picture, address } = row
      // If it as has not been structured
      let tempRow = {
        id: id,
        picture: picture
          ? "/storage/" + picture
          : "/images/default-school-img.png",
        name: name,
        items: [email, address],
        button: "Edit"
      }
      newStructure.push(tempRow)
    })
    return newStructure
  }

  return (
    <div className="school">
      <PageHeader>
        <PageHeading>School</PageHeading>
        <Button
          action={() => history.push("/dashboard/school/create")}
          classes="xl"
        >
          Add School
        </Button>
      </PageHeader>
      <PageContent>
        <Table
          heading={["picture", "name", "email", "address"]}
          body={data}
          url="/dashboard/school/"
          search={{
            placeholder: "Search School"
          }}
          pagination={{
            status: true,
            structure: dataStructure,
            loadMoreDistructure: (data) => data,
            accessToken: accessToken
          }}
        />
      </PageContent>
    </div>
  )
}

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
})

Index.propTypes = {
  accessToken: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Index)
