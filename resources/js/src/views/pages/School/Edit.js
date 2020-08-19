import React, { Suspense, lazy, useEffect, useState } from "react"
import {
  Route,
  Switch,
  useHistory,
  useRouteMatch,
  useParams
} from "react-router-dom"

// Redux
import PropTypes from "prop-types"
import { connect } from "react-redux"

// components
import { PageContent, PageHeader, Button, Loading } from "../../components"

// hooks
import { useSecureConnect } from "../../../hooks"

function Edit({ accessToken }) {
  // import Form from './Form'
  const Detail = lazy(() => import("./Detail"))
  const Fee = lazy(() => import("./Fee"))
  const Account = lazy(() => import("./Account"))
  const Page404 = lazy(() => import("../Page404/Page404"))

  const loadingScreen = () => <Loading color="primary" size="lg" />

  const history = useHistory()
  const { userId } = useParams()
  const { path } = useRouteMatch()

  const { get } = useSecureConnect()

  // state
  const [userInfo, setUserInfo] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    if (userId) {
      getUserInfo()
    } else {
      setLoading(false)
    }
  }, [userId])

  const getUserInfo = async () => {
    setLoading(true)

    try {
      const response = await get(`/api/user/${userId}`, accessToken)
      const { data } = response

      setUserInfo(data)
      setLoading(false)
    } catch (error) {
      console.error(error.response)
      // const { data } = response
      // history.push("/500")
      // switch (response.status) {
      //   // Unprocessable Entity
      //   case 422:
      //     break

      //   default:
      //     history.push("/500")
      //     break
      // }
    }
  }

  return (
    <div className="create-school">
      <PageHeader>
        <Button action={() => history.push("/dashboard/school")}>Back</Button>
      </PageHeader>
      <PageContent>
        <Suspense fallback={loadingScreen()}>
          <Switch>
            <Route
              exact
              path={`${path}`}
              component={() =>
                loading ? (
                  <Loading color="primary" size="lg" />
                ) : (
                  <Detail userInfo={userInfo} />
                )
              }
            />
            <Route
              exact
              path={`${path}/fee`}
              component={() =>
                loading ? (
                  <Loading color="primary" size="lg" />
                ) : (
                  <Fee feeList={userInfo ? userInfo.fees : null} />
                )
              }
            />
            <Route component={Page404} />
          </Switch>
        </Suspense>
      </PageContent>
    </div>
  )
}

// props from redux
const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
})

Edit.propTypes = {
  accessToken: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Edit)
