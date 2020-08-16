import React, { Component } from 'react'
import style from './Login.scss'
import img from '$assets/img/icon.png'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={style.box}>
        <figure>
          <img src={img} />
          <figcaption>嘻哈</figcaption>
        </figure>
      </div>
    )
  }
}
