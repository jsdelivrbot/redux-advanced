import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import App from './app'
import reducers from './reducers'

const enhancer = compose(
    applyMiddleware(
        promiseMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)
const store = createStore(reducers, {}, enhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('.container'))