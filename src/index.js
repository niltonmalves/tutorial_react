import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//envia as informacoes para o html
// mostra o retorno das funcoes
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
