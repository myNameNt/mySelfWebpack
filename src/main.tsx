
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import './common.scss' // 公共样式
// import 'lib-flexible' // 移动端使用
import reduces from './store'

let store = createStore(reduces)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));