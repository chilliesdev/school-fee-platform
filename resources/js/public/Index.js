import React from 'react';
import ReactDOM from 'react-dom';

import App from './src'

if (document.getElementById('public')) {
    ReactDOM.render(<App />, document.getElementById('public'));
}