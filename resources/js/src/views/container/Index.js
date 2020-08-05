import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import routes from '../../routes'
// import Dashboard from '../pages/Dashboard/Dashboard'

// Redux
import ProTypes from 'prop-types'
import { connect } from 'react-redux'

const SideBar = lazy(() => import('./SideBar'))
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'))

// components
import { Loading } from '../components'

// props from redux
const mapStateToProps = state => ({
  accessToken: state.auth.accessToken
})


export default connect( mapStateToProps )(function Index({ accessToken, match }) {

  const loading = () => <Loading color="primary" size="lg"/>

  return(
    <>
      <SideBar/>
      <Dashboard/>
    </>
  )

  // return (
  //   <Switch>
  //     <Route path={`${match.url}`} exact component={Dashboard} />
  //     <Route path={`${match.url}/test`} component={props => <h1>test</h1>} />
  //     {/* {routes.map((route, idx) => {
  //       return route.component
  //       ? <Route 
  //           key={idx}
  //           path={route.path}
  //           exact={route.exact}
  //           name={route.name}
  //           render={props => <route.component {...props} />}
  //         />
  //       : (null)
  //       }
  //     )}*/}
  //   </Switch>
  // )
})

// PropTypes
// Index.propTypes = {
//   accessToken: PropsTypes.string.isRequired
// }