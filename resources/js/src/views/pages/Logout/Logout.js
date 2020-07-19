import React, { useEffect, Suspense } from 'react'
import { Redirect } from 'react-router-dom'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestLogout } from '../../../actions/AuthAction'

// components
import Loading from '../../components/Loading'

function Logout({ accessToken, requestLogout }) {
  
  const loading = () => <Loading color="primary" size="lg"/>
  
  // Run Logout function
  useEffect(() => { 
    requestLogout(accessToken) 
  },[])

  return <Suspense fallback={loading()}>
    <Redirect to="/vendor/login"/>
  </Suspense>
}

Logout.propType = {
  accesToken: PropTypes.string.isRequired,
  requestLogout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken
})

export default connect( mapStateToProps, { requestLogout } )(Logout)