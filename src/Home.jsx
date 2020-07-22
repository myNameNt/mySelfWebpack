import React, { Component } from "react"
import {reverse} from './assets/js/tools.js'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'home'
    }
  }
  render () {
    return <section>
      <article>
        <header>{this.state.title}</header>
        <main>
          {reverse('content')}
        </main>
      </article>
    </section>
  }
}