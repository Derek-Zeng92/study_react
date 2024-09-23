import React, { Component,PureComponent } from 'react'

/* 
//1.第一种解决方案 shouldComponentUpdate
class Comment extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 性能优化的方法
    if(nextProps.comment.content === this.props.comment.content){
      return false;
    }else{
      return true;
    }
  }
  
  render() {
    console.log('render');
    const { id, content, author } = this.props.comment;
    return (
      <div>
        <p>{id}</p>
        <p>{content}</p>
        <p>{author}</p>
      </div>
    )
  }
} */
// PureComponent 它是以浅比较的方式实现的函数类 浅层比较它比较的是值
/* class Comment extends PureComponent {

  render() {
    console.log('render');
    const { id, content, author } = this.props;
    return (
      <div>
        <p>{id}</p>
        <p>{content}</p>
        <p>{author}</p>
      </div>
    )
  }
} */
// 一种高阶组件的用法
// 组件组合而非继承
// React有十分强大的组合模式
// 我们推荐使用组合而非继承来实现组件间的代码重用
// 高阶组件 =》高阶函数
// 组件设计的目的：保证组件功能的单一性
// 高阶组件：不是组件，本质上时一个函数，这个函数接收一个组件或者多个组件，返回一个新组件，Comment为高阶组件
const Comment = React.memo(({id,content,author})=>{
  console.log('render');

  return (
    <div>
      <p>{id}</p>
      <p>{content}</p>
      <p>{author}</p>
    </div>
  )
})
export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        comments: [
          {
            id: 1,
            content: 'react非常好',
            author: 'facebook'
          },
          {
            id: 2,
            content: 'vue比你好',
            author: '尤雨溪'
          }
        ]
      })
    }, 1000);
  }
  render() {
    return (
      <div>
        {
          this.state.comments.map((item, i) => {
            return (
              // <Comment key={item.id} comment={item}></Comment>
              // <Comment key={item.id} id={item.id} content={item.content} author={item.author}></Comment>
              <Comment key={item.id} {...item}></Comment>
            )
          })
        }
      </div>
    )
  }
}
