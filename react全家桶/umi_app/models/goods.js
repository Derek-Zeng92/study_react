import axios from 'axios'
// 异步处理的方法 返回一个promise对象 将被call()所使用的
function getGoods() {
  return axios.get('/api/goods')
}

export default {
  namespace:'goods', //model的命名空间，区别多个model
  // state:[
  //   {
  //     title:"web全栈课"
  //   },
  //   {
  //     title:'python全栈课'
  //   }
  // ],
  state:[],
  reducers:{
    // 触发reducers中的方法，直接修改当前的state
    addGood(state,action){
      return [...state,{title:action.payload.title}]
    },
    initGoods(state,action){
      // 同步操作
      return action.payload
    }
  },
  effects:{
    // for redux-saga
    // 副作用 处理异步的操作
    *getList(action,{call,put}){
      // 异步代码同步化
      const res = yield call(getGoods);
      yield put({type:"initGoods",payload:res.data.result})
    }
  }
}