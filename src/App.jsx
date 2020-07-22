import React, { Component } from 'react';
import style from './App.scss';
import img from './assets/img/icon.png'
import { reverse } from './assets/js/tools.js'
import Home from "./Home.jsx";
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className={style.box}>
        <img src={img} />
        <p>my {reverse('react-webpack-start')}</p>
        <Home></Home>
      </div>
    )
  }
}