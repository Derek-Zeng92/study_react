// 项目的入口文件
import { createRoot } from 'react-dom/client';
import App from './App';
import LifyCycle from './LifyCycle';
import ControlInput from './ControlInput';
import NoControlInput from './NoControlInput';
import FormSimple from './FormSimple';
import CartSimple from './CartSimple';



// 思考：<h2>hello,react</h2> 它到底是什么？
// JSX==JavaScript+Xml 对象 虚拟DOM元素  语法糖
const user = {
    fristName: '小',
    lastName: '马哥'
}
function formatName(user) {
    return user.fristName + user.lastName
}
const ele = <h2>hello,{formatName(user)}</h2>;

function getGeeting(user) {
    if (user) {
        return <h1>hello,{formatName(user)}</h1>
    }
    return <h1>hello,react</h1>
}


// ReactDOM.render(<div>{getGeeting()}</div>,document.querySelector('#root'));

// React只需要更新它需要更新的部分
/* function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>{new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.querySelector('#root'));
}

setInterval(tick, 1000); */

// 循环绑定元素 使用map
const arr = ['1', '2', '3'];
const ulEle = (<ul>
    {arr.map((item, index) => {
        // 循环绑定的jsx元素 必须要有key属性,来区分不同的元素,否则会报错
        return <li key={index}>{item}</li>
    })}
</ul>)


const goods = [
    { id: 1, price: 100, title: "小米6手机" },
    { id: 2, price: 200, title: "小米7手机" },
    { id: 3, price: 1100, title: "小米8手机" },
    { id: 4, price: 2000, title: "小米9手机" },
]
// ReactDOM.render(ulEle, document.querySelector('#root'));

// 过滤元素
const filterEle = (
    <ul>
        {goods.map((good,index)=>{
            return (good.price > 1000 ? <li key={good.id}>{good.title}</li>: null)
        })}
    </ul>
)


// ReactDOM.render(filterEle, document.querySelector('#root'));
// react核心思想就是组件化开发 其实就是玩JavaScript 就是一个函数

// props&组件
// 1.函数声明 函数式组件 它的本质就是一个函数
function Welcome(props) {
    return <h2>hello,{props.name}</h2>
}


// ReactDOM.render(<Welcome name='Welcome' />, document.querySelector('#root'));
// ReactDOM.render(<App name='你好' />, document.querySelector('#root'));
// ReactDOM.render(<LifyCycle />, document.querySelector('#root'));
// ReactDOM.render(<ControlInput />, document.querySelector('#root'));
// ReactDOM.render(<NoControlInput />, document.querySelector('#root'));
// ReactDOM.render(<FormSimple />, document.querySelector('#root'));

const root = createRoot(document.getElementById('root'));
root.render(<CartSimple />);


















