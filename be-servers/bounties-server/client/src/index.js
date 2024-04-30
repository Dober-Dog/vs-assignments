import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BountyContextProvider } from './components/bountyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BountyContextProvider>
    <App />
  </BountyContextProvider>
);
