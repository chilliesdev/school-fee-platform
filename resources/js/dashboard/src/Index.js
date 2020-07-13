import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'

import App from './App'

if (document.getElementById('dashboard')) {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/vendor" component={App}/>
                </Switch>
            </Router>
        </Provider>,
    document.getElementById('dashboard'));
}
