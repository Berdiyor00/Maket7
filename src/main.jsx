import React from 'react';
import App from './App.jsx';
import './main.scss';
import { Provider } from 'react-redux';
import { store } from './reducer/store.js';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
