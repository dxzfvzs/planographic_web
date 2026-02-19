import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/layout.css';
import './css/text.css';
import App from './App';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
);
