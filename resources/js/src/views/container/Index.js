import React, { useState, useEffect, Suspense } from 'react'
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'

// Protected Rotess
import routes from '../../routes'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Container components
import SideBar from './SideBar'

// components
import { Loading } from '../components'

// custom Hooks
import { useSecureConnect } from '../../hooks'

function Index({ accessToken }) {
  
  const loading = () => <Loading color="primary" size="lg"/>

  const { path } = useRouteMatch()
  const { get } = useSecureConnect()

  // State
  const [redirect, setRedirect] = useState(false)
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    accessToken && validateAccessToken()
  }, [accessToken])

  const validateAccessToken = async () => {
    try {
      const response = await get('/auth',accessToken)
      setUserDetails(response.data)
    } catch({ status, response }) {
      switch (status) {
        case 401:
            setRedirect(true)
          break;
      
        default:
            console.error(response)
            // If their was an error retry
            setTimeout(() =>
              validateAccessToken()
            , 3000)
          break;
      }
    }
  }

  return(
    <Suspense fallback={loading()}>
      {!userDetails
      ? <Loading color="primary" size="lg" />
      : <>
        <SideBar />
        <div className="dashboard-container">
          <Switch>
            { routes ? 
              routes.map( (route, idx) => 
                // check if user has permission to access the route
                // route.permission === userDetails.type || route.permission === "general" &&
                <Route
                  key={idx}
                  exact={route.exact} 
                  path={`${path}${route.path}`} 
                  component={route.component} />
                )
              : null
            }
            <Route component={() => <h1>404 Error Not Found</h1>} />
          </Switch>
        </div>
      </>}
      {(!accessToken || redirect)&& <Redirect to="/login" />}
    </Suspense>
  )
}

// props from redux
const mapStateToProps = state => ({
  accessToken: state.auth.accessToken
})

Index.propTypes = {
  accessToken: PropTypes.string.isRequired
}

export default connect( mapStateToProps )(Index)