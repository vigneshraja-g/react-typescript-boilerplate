import React, { Component } from 'react'

type MyProps = {
  // using `interface` is also ok
  theme: string
}
type MyState = {
  count: number // like this
}
export default class Test extends Component<MyProps, MyState> {
  state = {
    count: 2,
  }
  render() {
    return <h1>Warning {this.props.theme}</h1>
  }
}
