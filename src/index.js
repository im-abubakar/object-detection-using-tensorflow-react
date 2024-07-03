import React from 'react';
import { createRoot } from 'react-dom/client'; // Import for createRoot
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Decide which component to render here */}
    <App />  {/* Or <Home /> */}
  </React.StrictMode>
);
