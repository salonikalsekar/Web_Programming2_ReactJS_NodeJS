import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const title = "Pokedex"

ReactDOM.render(
    <App title={title} author="Author"/>, document.getElementById('root'));
registerServiceWorker();
