import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import { AppProvider } from './context/context';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
   </BrowserRouter>
  </React.StrictMode>
);

