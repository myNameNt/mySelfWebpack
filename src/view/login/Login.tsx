import React, { Component } from 'react'
import style from './Login.scss'
import img from '$assets/img/icon.png'
interface homeProps {

}
interface homeState {}
export default class Login extends Component<homeProps,homeState> {
  constructor(props: homeProps) {
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
