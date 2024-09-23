import React, { Component } from 'react'

//高阶组件：本质上时一个函数，这个函数接收一个组件或者多个组件，返回一个新组件

// 高阶函数
// 定义：接收的参数是函数或者返回值是函数
// 常见的：数组遍历的相关方法、定时器、Promise 、高阶组件
// 作用： 实现一个更加强大的 动态功能
// [1,3,5]  [3,5,7]

// y = kx + b;
/* const highOrderCom = (Comp)=>{
  // 返回一个新组件
  const NewComponent = (props)=>{
    // 属性代理
    const attr = {type:'高阶组件',price:168}
    return <Comp {...props} {...attr}></Comp>
  }
  return NewComponent

} */
// 打印日志的高阶组件
const withLog = (Comp) => {
  console.log(Comp.name + '渲染了');
  const newCom = (props) => {
    return <Comp {...props}></Comp>
  }
  return newCom;

}
const highOrderCom = (Comp) => {
  // 返回一个新组件
  return class Aaa extends Component {
    constructor(props) {
      super(props);

    }
    componentDidMount() {
      console.log('发起ajax请求');

    }
    handleClick = () => {

    }
    render() {
      return (

        <Comp {...this.props} name='react' content='高阶组件的使用' onClick={this.handleClick}></Comp>
      )
    }

  }

}
@highOrderCom
@withLog
@withLog
class Hoc extends Component {
  render() {
    return (
      <div>
        <h3>当前课程:{this.props.name}</h3>
        <h3>当前价格:{this.props.content}</h3>
      </div>
    )
  }
}
// 高阶组件的链式调用
// export default highOrderCom(withLog(withLog(Hoc)))
export default Hoc;



/* 
1.为什么我们需要高阶组件？
  react高阶组件能够让我们写出易于维护的react代码，能早点下班
2.高阶组件是什么？
  本质上时一个函数，这个函数接收一个组件或者多个组件，返回一个新组件
  比如：我给你一个赛亚人你给我一个超级赛亚人
  y = kx+b
  x好比是普通组件，k和b就是当前普通组件定制的属性和方法 y就是返回的新组件
3.如何实现高阶组件
  1.属性代理是最常见的实现方式
  好处：常用的方法独立并多次复用
  2.反向继承
4.高阶组件的应用
  1.页面复用
  2.权限控制
  3.打印日志
*/
