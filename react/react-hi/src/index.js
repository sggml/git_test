
// 1. 모듈 가져오기
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// from 상대경로(내가만든 모듈) or 모듈명(yarn install에서 설치된, 순수 node 모듈)
import App1 from './App';
import MyInput2 from './MyInput2';
import MyInput from './MyInput';
import {MySelect} from './MySelect';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App1 /> */}
    <MyInput2 />
    <MyInput />
    <MySelect citys ={['서울','부산','재주','대전']}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();