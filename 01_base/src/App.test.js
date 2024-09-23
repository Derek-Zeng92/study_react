import React, { Component } from 'react'
import './App.css'
// import Logo from './logo.svg'
// 2.类声明 ES6 真实项目中应用最多
// 注意：
// 1.React.Component它是一个基类，使用类声明的组件，必须继承这个基类
// 2.在类中，必须有render函数，
// 3.在render函数中，需要return一个jsx元素
// 4.组件名称要以大写字母开头

// 什么是复用组件?
/* 
1.将多个组件进行整合，例如调用两次以上相同的组件
2.结构非常复杂时需要将组件拆分成小组件
3.会存在父子关系的数据传递
*/
class MyBtn extends Component {
    render() {
        return (
            <button>{this.props.title}</button>
        );
    }
}
class Avatar extends Component {
    render() {
        return (
            <div>
                <img src={this.props.avatarUrl} alt="" />
                {/* <img src={Logo} alt=""/> */}
            </div>
        );
    }
}


// App=>Comment=>UserInfo=>Avatar
class UserInfo extends Component {
    render() {
        return (
            <div className="userinfo">
                <Avatar avatarUrl={this.props.avatarUrl}></Avatar>
                <div className="username">
                    {this.props.name}
                </div>
            </div>
        );
    }
}


class Comment extends Component {
    handleClick = () => {
        this.props.add('子组件中的值')
    }
    render() {
        return (
            <div className='comment'>
                {/* 用户信息  */}
                <UserInfo {...this.props.user}></UserInfo>
                {/* <UserInfo avtarUrl={this.props.user.avtarUrl} name={this.props.user.name} content={this.props.user.content}></UserInfo> */}
                {/* 用户评论内容 */}
                <div className="comment-content">
                    评论内容:{this.props.user.content}
                </div>
                {/* 用户评论时间 */}
                <div className="comment-date">
                    发布时间:{this.props.user.date}
                </div>
                <button onClick={this.handleClick}>子传父</button>
            </div>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        // 遵循单向数据流
        this.user = {
            avatarUrl: 'https://hcdn1.apeland.cn/media/course/icon2.png',
            name: '小马哥',
            content: '这是我的react组件',
            date: new Date().toLocaleTimeString(),
            val:'hello'
        }
    }
    add(val) {
        // alert(val) 
        console.log(this);
        
        this.user.val = val;
        console.log(this.user.val);
        
    }
    // 生命周期

    // 必须使用render函数 能将虚拟DOM渲染成真实的DOM
    render() {
        // 它会将jsx所接收的属性转换为单个对象传递到组件，这个对象我们称为叫 props
        return (
            <div>
                <h2>hello,{this.props.name}</h2>
                <h1>{this.user.val}</h1>
                <MyBtn title='提交'></MyBtn>
                <MyBtn title='删除'></MyBtn>
                <MyBtn title='修改'></MyBtn>
                <MyBtn title='添加'></MyBtn>
                <Comment user={this.user} add={this.add}></Comment>
            </div>
        )
    }
}
// 指令：rcc
// import React, { Component } from 'react'

// export default class App extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }
