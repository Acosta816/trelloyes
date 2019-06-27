import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import STORE from './Store';
import App from './App';



ReactDOM.render(<App storeProp={STORE}/>, document.getElementById('root'));

