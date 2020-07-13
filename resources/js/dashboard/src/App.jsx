import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Redux
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// components
import Loading from './views/components/Loading'

// Pages
const Login = lazy(() => import('./views/pages/Login/Index'))
const Home = lazy(() => import('./views/pages/Home/Home'))

const loading = () => <Loading color="primary" size="lg"/>

function App({ match, accessToken }) {
  const URL_PREFIX = match.url
  console.log(URL_PREFIX)

  const [redirect, setRedirect] = useState(null)

  // If there is an accesstoken is set redirect to home
  useEffect(
    () => setRedirect(`${URL_PREFIX}`)
  ,[accessToken])

  return <>
    {/* Check if logged in if not go to home   */
      !redirect && <Redirect to={`${URL_PREFIX}/login`}/>}

    <Suspense fallback={loading()}>
      <Switch>
        <Route exact path={`${URL_PREFIX}/login`} component={Login} />
        <Route exact path={`${URL_PREFIX}`} component={Home} />
      </Switch>
    </Suspense>
  </>
}

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken
})

export default connect( mapStateToProps )(App)