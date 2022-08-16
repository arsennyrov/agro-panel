import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './fonts/TT Norms/TTNorms-Regular.otf';
import 'antd/dist/antd.css'
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import { store } from './stores';

window.ReactDOM = ReactDOM;
window.React = React;
window.Provider = Provider;
window.App = App;
window.App1 = App1;
window.App2 = App2;
window.App3 = App3;
window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

