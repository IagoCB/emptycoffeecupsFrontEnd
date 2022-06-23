import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyle'
import ContextProvider from './contexts/context';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container)

root.render(  
  <BrowserRouter>
    <ContextProvider>
      <GlobalStyle/>
      <App />
    </ContextProvider>
  </BrowserRouter>
);


