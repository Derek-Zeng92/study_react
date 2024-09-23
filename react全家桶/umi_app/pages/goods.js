import { Component } from "react";
import styles from './goods.css';
import { connect } from 'dva'
import { Card, Button } from "antd";

@connect(
  state => ({
    goodsList: state.goods,//获取指定命名空间的模型状态
    loading:state.loading
  }),
  {
    addGood: title => ({
      type: "goods/addGood",//action的type需要以命名空间为前缀+reducer中方法名
      payload: {
        title
      }
    }),
    getList:()=>({
      type:'goods/getList'
    })
  }
)

// Umijs === react+react-router
// dva === redux + react-redux + redux-saga
export default class extends Component {
  componentDidMount(){
    this.props.getList();
  }
  render() {
    // 内置的loading
    if(this.props.loading.models.goods){
      return <div>加载中....</div>
    }
    return (
      <div className={styles.normal}>
        <h1>Page goods</h1>
        <div className="goodsList">
          {
            this.props.goodsList.map(good => {
              return (
                <Card key={good.title}>
                  <div>{good.title}</div>

                </Card>
              )
            })
          }
        </div>
        <div>
          <Button onClick={() => this.props.addGood('商品' + new Date().getTime())}>添加商品</Button>
        </div>
      </div>
    );
  }
}
