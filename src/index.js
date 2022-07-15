import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/builder';
import Header from './components/Header/builder';
import './assets/styles/normalize.min.css';
import './assets/styles/general.scss';


// import your fontawesome library
import './fontawesome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);


