import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// components
import Loading from './views/components/Loading'

// Pages
const Login = lazy(() => import('./views/pages/Login/Index'))
const Logout = lazy(() => import('./views/pages/Logout/Logout'))
const Home = lazy(() => import('./views/pages/Home/Home'))

// container
const Container = lazy(() => import('./views/container'))

const loading = () => <Loading color="primary" size="lg"/>

function App({ history, accessToken }) {

  // If there is an accesstoken is set redirect to home
  // useEffect(
  //   () => {
  //     !accessToken && history.push(`${URL_PREFIX}/login`)
  //   }
  // ,[accessToken])

  return <Suspense fallback={loading()}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/dashboard" component={Container} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Suspense>
}

App.propTypes = {
  accessToken: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken,
})

export default connect( mapStateToProps )(App)