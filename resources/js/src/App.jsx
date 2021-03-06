import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// components
import Loading from "./views/components/Loading"

// Marterial UI
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

// Pages
const Login = lazy(() => import("./views/pages/Login/Index"))
const Logout = lazy(() => import("./views/pages/Logout/Logout"))
const Invoice = lazy(() => import("./views/pages/Invoice/Invoice"))
const Home = lazy(() => import("./views/pages/Home/Home"))
const Page404 = lazy(() => import("./views/pages/Page404/Page404"))

// container
const Container = lazy(() => import("./views/container"))

// Theme
const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Montserrat"', "sans-serif"].join(","),

    fontSize: 13,

    h4: {
      fontFamily: ['"Scada"', "sans-serif"].join(",")
    }
  }
})

const loading = () => <Loading color="primary" size="lg" />

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/invoice" component={Invoice} />
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Container} />
            <Route component={Page404} />
            <Route
              exact
              path="/500"
              component={() => <h1>500 Unauthorized</h1>}
            />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App
