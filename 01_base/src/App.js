import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    // 改变this的指向
    // this.add = this.add.bind(this)
    this.state.count = 1;

  }
  add(e) {
    console.log(e);

    // 除了constructor之外的其它地方，修改状态的唯一方法是调用this.setState()
    // setState 它是一个异步操作
    // this.setState({
    //   count: this.state.count + 1
    // })

    // 函数的方式
    this.setState((prevState, prevProps) => ({
      count: prevState.count + 1
    }),()=>{
      // 是一个回调函数，在状态改变之后执行
      console.log(this.state.count);
    })
  }
  render() {
    console.log('渲染了');
    return (
      <div>
        <h2>{this.state.count}</h2>
        {/* <button onClick={this.add}>+1</button> */}
        {/* <button onClick={this.add.bind(this)}>+1</button> */}
        <button onClick={(e) => this.add(e)}>+1</button>
      </div>
    )
  }
}
