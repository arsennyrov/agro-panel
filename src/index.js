import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './fonts/TT Norms/TTNorms-Regular.otf';

import './index.css';
import App from './App';
import { store } from './stores';

// window.ReactDOM = ReactDOM;
// window.React = React;
// window.Provider = Provider;
// window.App = App;
// window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

