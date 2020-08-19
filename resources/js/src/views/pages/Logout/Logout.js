import React, { useEffect, Suspense } from "react"
import { useHistory } from "react-router-dom"

// Redux
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { requestLogout } from "../../../actions/AuthAction"

// components
import Loading from "../../components/Loading"

function Logout({ accessToken, requestLogout }) {
  const history = useHistory()
  // const loading = () => <Loading color="primary" size="lg" />

  // Run Logout function
  useEffect(() => {
    requestLogout(accessToken)
    return () => {
      history.push("/")
    }
  }, [accessToken])

  return <Loading color="primary" size="lg" />
}

Logout.propType = {
  accesToken: PropTypes.string.isRequired,
  requestLogout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
})

export default connect(mapStateToProps, { requestLogout })(Logout)
