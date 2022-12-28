import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename='/goit-react-hw-05-movies/'>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </BrowserRouter>
  // </React.StrictMode>
);
