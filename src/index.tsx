import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/layout.css';
import './css/text.css';
import './css/accessibility.css';
import './css/print.css';
import App from './App';
import { HashRouter } from 'react-router-dom';


window.history.scrollRestoration = 'manual';

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
