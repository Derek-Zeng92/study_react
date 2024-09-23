import React, { Component } from 'react';
const ThemeContext = React.createContext();
// 提供者
export const withProvider = Comp => {
  return class extends Component {
    constructor(props) {
      super(props)
      // 共享的数据
      this.state = {
        store: {
          type: 'primary',
          name: "按钮"
        }
      }
    }
    render() {
      return (
        <ThemeContext.Provider value={this.state.store}>
          <Comp {...this.props}></Comp>
        </ThemeContext.Provider>
      );
    }
  }

}

// 消费者
export const withConsumer = Comp => {
  return class extends Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {
            value => <Comp {...this.props} value={value}></Comp>
          }
        </ThemeContext.Consumer>
      );
    }
  }

}