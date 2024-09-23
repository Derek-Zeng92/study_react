import React, { Component } from 'react'
import { Icon } from "antd";

// 高阶组件
const MFormCreate = Comp => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.options = {}; //各个字段的选项值  它的变化不会影响组件重新渲染
      this.state = {}; //各个字段的值 它的变化 要触发校验的函数 数据渲染
    }
    // 处理表单项输入事件
    handleChange = e => {
      const { name, value } = e.target;
      // setState()它是异步的
      this.setState({
        [name]: value
      }, () => {
        // 设置完值之后 要校验各个字段
        this.validateField(name);
      })
    }
    // 表单项的校验
    validateField = fieldName => {
      const { rules } = this.options[fieldName];
      const ret = rules.some(rule => {
        if (rule.required) {
          // 输入框中为空，要出现错误的信息展示
          if (!this.state[fieldName]) {
            this.setState({
              [fieldName + 'Message']: rule.message
            })
            return true;//校验失败 返回true
          }
        }
      })
      if (!ret) {
        this.setState({
          [fieldName + 'Message']: ''
        })
      }
      return !ret; //校验成功  返回false

    }
    validateFields = (cb) => {
      const rets = Object.keys(this.options).map(fieldName => this.validateField(fieldName))
      const ret = rets.every(v => v === true);
      cb(ret)

    }
    handleFocus = e => {
      const fieldName = e.target.name;
      this.setState({
        [fieldName + 'Focus']: true
      })
    }
    getFieldDecorator = (fieldName, option) => {
      // 设置字段选项配置 存储校验错误的配置
      this.options[fieldName] = option;
      return (InputComp) => {
        // 更加api的方式
        return <div>
          {
            React.cloneElement(InputComp, {
              name: fieldName, //控件的name
              value: this.state[fieldName] || '',//控件值
              onChange: this.handleChange,
              onFocus: this.handleFocus
            })
          }
        </div>
      }
    }
    // 判断控件是否被点击过
    isFieldTouched = (fieldName) => !!this.state[fieldName + 'Focus']
    // 获取控件错误提示信息
    getFieldError = fieldName => this.state[fieldName + 'Message']

    form = () => {
      return {
        getFieldDecorator: this.getFieldDecorator,
        validateFields: this.validateFields,
        isFieldTouched: this.isFieldTouched,
        getFieldError: this.getFieldError
      }
    }
    render() {
      return (
        <Comp {...this.props} form={this.form()}></Comp>
      );
    }
  }

}
class FormItem extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        {/* 错误信息展示 */}
        {
          this.props.validateStatus && (
            <p style={{ color: 'red' }}>{this.props.help}</p>
          )
        }
      </div>
    );
  }
}
class Input extends Component {
  render() {
    return (
      <div>
        {this.props.prefix}
        <input type="text" {...this.props}/>
      </div>
    );
  }
}



@MFormCreate
class MForm extends Component {
  handleSubmit = () => {
    // isValid为true表示校验成功，为flase表示校验失败
    this.props.form.validateFields((isValid) => {
      console.log(isValid);
      if (isValid) {
        alert('验证成功');
      } else {
        alert('验证失败');
      }
    })
  }
  render() {
    const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form;
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        <FormItem validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {
            getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: '用户名是必填项'
                }
              ]
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" />)
          }
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {
            getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '密码是必填项'
                }
              ]
            })(<Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>)
          }
        </FormItem>


        <input type="button" value='登录' onClick={this.handleSubmit} />
      </div>
    )
  }
}
export default MForm

