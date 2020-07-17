import React, { Component } from 'react';
import style from './App.scss';
import img from './assets/img/icon.png'
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className={style.box}>
        <img src={img} />
        <p>my react-webpack-start</p>
      </div>
    )
  }
}