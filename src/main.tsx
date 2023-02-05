import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';
import './index.css';
import { AppProvider } from './app/app-provider';
import { HashRouter } from 'react-router-dom';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
      <AppProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </AppProvider>,
  );
}
