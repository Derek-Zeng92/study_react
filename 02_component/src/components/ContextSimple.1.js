import React, { Component } from 'react'
import { Button } from "antd";
import { withProvider, withConsumer } from '../HOC/index';

@withConsumer
class ThemeBtn extends Component {
  render() {
    return (
      <Button type={this.props.value.type}>{this.props.value.name}</Button>

    );
  }
}

function Toolbar(props) {
  return <ThemeBtn></ThemeBtn>
}
// Context   === vue的provide和inject  react中provider和consumer
@withProvider
class ContextSimple extends Component {
  render() {
    return (
      <Toolbar></Toolbar>
    )
  }
}
export default ContextSimple
