import React, { Component } from 'react'
import { Button } from 'antd';
function Dialog(props) {
  return (
    <div style={{border:`3px solid ${props.color || 'blue'}`}}>
      {/* 好比是 Vue的匿名插槽 */}
      {props.children}
      <div>
        {/* 具名插槽 */}
        {props.btn}
      </div>
    </div>
  )
}
function WelcomeDialog() {
  const confirmBtn = <Button type='info'>确认</Button>
  return (
    <Dialog color='green' btn={confirmBtn}>
      <h3>welcome</h3>
      <p>欢迎光临</p>
    </Dialog>
  )
}
function ThankDialog() {
  const thankBtn = <Button type='primary'>谢谢</Button>
  return (
    <Dialog color='red' btn={thankBtn}>
      <h3>Thanks</h3>
      <p>谢谢您</p>
    </Dialog>
  )
}

export default class Compond extends Component {
  render() {
    return (
      <div>
        <WelcomeDialog></WelcomeDialog>
        <ThankDialog></ThankDialog>
      </div>
    )
  }
}
