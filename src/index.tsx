import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <HashRouter>
      <App />
    </HashRouter>
    </Suspense>
  </React.StrictMode>,
);
