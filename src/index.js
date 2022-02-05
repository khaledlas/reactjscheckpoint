import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { render } from 'react-dom'


ReactDOM.render(

    <AlertProvider template={AlertTemplate} >
    <App />
  </AlertProvider>
  
  
  ,
  document.getElementById("root")
);
const Root = () => (
  <AlertProvider template={AlertTemplate} >
    <App />
  </AlertProvider>
)

render(<Root />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

