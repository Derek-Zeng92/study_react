import React, { Component } from 'react'
function Cart(props) {
  return (
    <table border='1'>
      <tbody>
        {
          props.cart.map((good,i)=>{
            return (
              <tr key={i}>
                <td>{good.title}</td>
                <td>{good.price * good.count}</td>
                <td>{good.title}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default class CartSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [],
      title: "",
      price: '',
      cart: []
    }
  }
  componentDidMount() {
    // 发起ajax请求
    setTimeout(() => {
      let goods = [
        { id: 1, title: 'React入门', price: 20 },
        { id: 2, title: 'React进阶', price: 30 },
        { id: 3, title: 'Redux', price: 40 },
        { id: 4, title: 'React-router', price: 50 },
      ]
      this.setState({
        goods
      })
    }, 1000);
  }
  handleTitle = e => {
    this.setState({
      title: e.target.value
    })
  }
  handlePrice = e => {
    this.setState({
      price: e.target.value
    })
  }
  addGood = () => {
    if (this.state.title && this.state.price) {
      this.setState({
        goods: [...this.state.goods, { id: 5, title: this.state.title, price: this.state.price }]
      })
    }
  }
  addShop = (i) => {
    console.log(i);
    
    const good = this.state.goods[i];
    console.log(good);
    
    const cartGood = this.state.cart.find(v => v.title === good.title);
    if (cartGood) {
      // 证明已经有商品
      const newCart = [...this.state.cart];
      newCart[i].count += 1;
      this.setState({
        cart: newCart
      })
    } else {
      // 第一次添加商品
      this.setState({
        cart: [...this.state.cart, {
          title: good.title,
          price: good.price,
          active: true,
          count: 1
        }]
      })
    }

  }

  render() {
    return (
      <div>
        <h2>我的购物车</h2>
        <div>
          <p>
            <label htmlFor="title">课程名:</label>
            <input type="text" id='title' value={this.state.title} onChange={this.handleTitle} />
          </p>
          <p>
            <label htmlFor="price">价格:</label>
            <input type="text" id='price' value={this.state.price} onChange={this.handlePrice} />
          </p>
          <br />
          <button onClick={this.addGood}>添加商品</button>
        </div>
        <ul>
          {
            this.state.goods.map((good, i) => {
              return (
                <li key={good.id}>
                  <span>{good.title}</span>-
                  ￥<span>{good.price}</span>
                  <button onClick={() => this.addShop(i)}>加购</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Cart cart={this.state.cart}></Cart>
      </div>
    )
  }
}
