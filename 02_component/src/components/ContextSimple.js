import React, { Component } from 'react'
import { Button } from "antd";
const ThemeContext = React.createContext();
class ThemeBtn extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    
  }
  // 第一种渲染的方式 首先定制当前创建的上下文对象 为当前实例的静态属性
  // 在渲染的方法中使用this.context获取共享的数据
  // static contextType = ThemeContext;
  
  // this.context
  render() {
    return (
      // <Button type={this.context.type}>{this.context.name}</Button>
      <ThemeContext.Consumer>
        {
          // 2.建议使用这种方式 基于函数去渲染
          // (value)=>{
          //   return <Button type={value.type}>{value.name}</Button>
          // }
          value=><Button type={value.type}>{value.name}</Button>
        }
      </ThemeContext.Consumer>
    );
  }
}

function Toolbar(props) {
  return <ThemeBtn></ThemeBtn>
}
// Context   === vue的provide和inject  react中provider和consumer
export default class ContextSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {
        type:'primary',
        name:"按钮"
      }
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.store}>
        <Toolbar></Toolbar>
      </ThemeContext.Provider>
     
    )
  }
}
