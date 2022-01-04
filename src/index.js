import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const elm = <h1>Text in JS</h1>;
ReactDOM.render(elm, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('app'));
