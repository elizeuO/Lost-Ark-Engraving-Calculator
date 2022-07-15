import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/builder';
import Header from './components/Header/builder'
import './assets/styles/general.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);


