import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { reverse } from '../../assets/js/tools'
import { GlobelState } from '../../store/types'
import { Dispatch } from 'redux'
import { addAction, minusAction } from '../../store/actions'
interface loginProps {
  num: number;
  onAddClick: (num: number) => void;
  onMinusClick: (num: number) => void;
  dispatch: Dispatch
}
interface loginState {
  title: String;
  name: String;
  time: Number
}
class Home extends Component<loginProps, loginState> {
  public time: Number = Date.now()
  constructor(props: loginProps) {
    super(props)
    this.state = {
      title: 'home',
      name: 'xi',
      time: 21
    }
    this.onAdd = this.onAdd.bind(this)
    this.onMinus = this.onMinus.bind(this)

  }
  onAdd() {
    this.props.onAddClick(1)
  }
  onMinus() {
    this.props.onMinusClick(1)
  }
  onChangeState = () => {
    this.state = { name: 'unshift', title: 'shift', time: 32 }
    this.setState({
      title: '我是大魔王👌'
    })
    this.time = Date.now()
  }
  render() {
    const { num } = this.props
    console.log(this.props, 'dispatch')
    // this.state = { name: 'ha', title: 'pop' }
    return (
      <section>
        <article>
          <header>{this.state.title}</header>
          <main>{reverse('content')}</main>
          <span className="iconfont">&#xe613;</span>
          <span className="iconfont icon-shouji"></span>
          <span className="iconfont icon-wenju1"></span>
          <Link to="/login">to login</Link>
          <div>
            <button onClick={this.onAdd}>增加</button>
            <button onClick={this.onMinus}>减少</button>
            <button onClick={this.onChangeState}>change</button>
            {this.time}
            <span>{num}</span>
          </div>
        </article>
      </section>
    )
  }
}
const mapStateToProps = (state: GlobelState) => {
  return {
    num: state.computedNumber.result
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddClick: (num: number) => {
      dispatch(addAction(num))
    },
    onMinusClick: (num: number) => {
      dispatch(minusAction(num))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)