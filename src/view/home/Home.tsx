import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { reverse } from '../../assets/js/tools'
import { GlobelState } from '../../store/types'
import {Dispatch} from 'redux'
import {addAction, minusAction} from '../../store/actions'
interface loginProps {
  num: number
}
interface loginState {
  title: String
}
class Home extends Component<loginProps, loginState> {
  constructor(props: loginProps) {
    super(props)
    this.state = {
      title: 'home',
    }
  }
  onAdd(){
    this.props.onAddClick()
  }
  render() {
    const {num} = this.props
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
            <button onClick={}>增加</button>
            <button onClick={}>减少</button>
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
    onAddClick: (num:number) => {
      dispatch(addAction(num))
    },
    onMinusClick: (num:number) => {
      dispatch(minusAction(num))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)