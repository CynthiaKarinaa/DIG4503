//imports react, reactdom and app.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//helps with identifying components
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

