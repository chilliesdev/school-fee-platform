import React, { Suspense, lazy, useState } from "react"
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom"

// components
import { PageContent, PageHeader, Button, Loading } from "../../components"

export default function Create() {
  // import Form from './Form'
  const Detail = lazy(() => import("./Detail"))
  const Fee = lazy(() => import("./Fee"))
  const Account = lazy(() => import("./Account"))
  const Page404 = lazy(() => import("../Page404/Page404"))

  const loading = () => <Loading color="primary" size="lg" />

  const history = useHistory()
  const { path } = useRouteMatch()

  return (
    <div className="create-school">
      <PageHeader>
        <Button action={() => history.push("/dashboard/school")}>Back</Button>
      </PageHeader>
      <PageContent>
        <Suspense fallback={loading()}>
          <Switch>
            <Route exact path={path} component={Detail} />
            <Route exact path={`${path}/fee/:userId`} component={Fee} />
            <Route exact path={`${path}/account/:userId`} component={Account} />
            <Route component={Page404} />
          </Switch>
        </Suspense>
      </PageContent>
    </div>
  )
}
