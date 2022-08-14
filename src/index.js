import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

const TASKS = [
  { name : "Eat", done : false, id : "task-0" },
  { name : "Sleep", done : false, id : "task-1" },
  { name : "Code", done : false, id : "task-2" },
  { name : "Repeat", done : true, id : "task-3" }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks = {TASKS} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
