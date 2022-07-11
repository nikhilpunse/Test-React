import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App1 from './projects/App1';

import Accordion from './projects/Accordion';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App1/>
    </BrowserRouter>
  </React.StrictMode>
);
