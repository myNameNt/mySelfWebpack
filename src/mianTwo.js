
import React from 'react';
import ReactDOM from 'react-dom';
import { reverse } from './assets/js/tools.js'
// import 'lib-flexible' // 移动端使用
ReactDOM.render(<div><p>main two {reverse('我是大魔王')}</p></div>, document.getElementById('app'));