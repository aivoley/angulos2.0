import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // o './index.css' según el archivo que tengas

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

