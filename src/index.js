import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './containers/App'

const store = createStore(() => {}, {})

render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)