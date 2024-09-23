import React, { Component } from 'react'
// 需要实现一个返回高阶组件的函数
export const withAdminAuth = (role,vip) => (Comp) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isAdmin: false
      }
    }
    componentDidMount() {
      // 已经从后端获取到该页面的用户的权限
      const currentRole = 'admin';
      const currentVip = 'vip';

      // admin 或者是vip就有权限访问页面

      this.setState({
        isAdmin: currentRole === role || currentVip === vip
      })
    }
    render() {
      if (this.state.isAdmin) {
        return <Comp {...this.props}></Comp>
      } else {
        return <div>您没有权限查看该页面，请联系管理员</div>
      }
    }
  }

}

/* 
1.高阶组件不是组件，本质是一个函数 把一个普通的组件转换成另一个高级的组件的函数
2、高阶组件的作用主要是代码复用
  页面复用
  权限控制
  打印日志
3.高阶组件可以使用ES7的装饰器的用法



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

// 传值 props
// Context 上下文