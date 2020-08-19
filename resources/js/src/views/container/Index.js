import React, { useState, useEffect, Suspense, lazy } from "react"
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom"

// Protected routes
import routes from "../../routes"

// Redux
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Container components
import SideBar from "./SideBar"

// components
import { Loading } from "../components"

// custom Hooks
import { useSecureConnect } from "../../hooks"

function Index({ accessToken }) {
  const Page404 = lazy(() => import("../pages/Page404/Page404"))

  const loading = () => <Loading color="primary" size="lg" />

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
      const response = await get("/api/auth", accessToken)
      setUserDetails(response.data)
    } catch ({ response }) {
      switch (response.status) {
        case 401:
          setRedirect(true)
          break

        default:
          console.error(response)
          // If their was an error retry
          setTimeout(() => validateAccessToken(), 3000)
          break
      }
    }
  }

  return (
    <Suspense fallback={loading()}>
      {!userDetails ? (
        <Loading color="primary" size="lg" />
      ) : (
        <>
          <SideBar
            userType={userDetails.type}
            profilePicture={userDetails.picture}
          />
          <div className="dashboard-container">
            <Switch>
              {routes
                ? routes.map((route, idx) => (
                    // check if user has permission to access the route
                    // route.permission === userDetails.type || route.permission === "general" &&
                    <Route
                      key={idx}
                      exact={route.exact}
                      path={`${path}${route.path}`}
                      component={() => (
                        <route.component userDetails={userDetails} />
                      )}
                    />
                  ))
                : null}
              <Route component={Page404} />
            </Switch>
          </div>
        </>
      )}
      {(!accessToken || redirect) && <Redirect to="/login" />}
    </Suspense>
  )
}

// props from redux
const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
})

Index.propTypes = {
  accessToken: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Index)
