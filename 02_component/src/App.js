import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentList from './components/CommentList';
import Compond from './components/Compond';
import Hoc from './components/Hoc';
import MovieA from './components/MovieA';
import MovieB from './components/MovieB';
import PageA from './components/PageA';
import PageB from './components/PageB';
import ContextSimple from './components/ContextSimple';
import ContextSimple1 from './components/ContextSimple.1';
import AntdFormTest from './components/AntdFormTest';
import MForm from './components/MForm';





// 全局导入
// import Button from 'antd/es/button'
// import 'antd/dist/antd.css'

// 局部导入
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <CommentList></CommentList>
      <Compond></Compond>
      <h3>高阶组件的使用</h3>
      <Hoc></Hoc>
      <MovieA></MovieA>
      <MovieB></MovieB>
      <PageA></PageA>
      <PageB></PageB>
      <ContextSimple></ContextSimple>
      <ContextSimple1></ContextSimple1>
      <AntdFormTest></AntdFormTest>
      <MForm></MForm>



  
    </div>
  );
}

export default App;
