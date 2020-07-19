import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux'
import store from './store'

import App from './App'

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root'));
}
