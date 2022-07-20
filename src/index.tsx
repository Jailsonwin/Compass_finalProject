import Router from './routes/routes';
import 'normalize.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
