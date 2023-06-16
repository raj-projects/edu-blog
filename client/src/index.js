import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from '../src/comonents/App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import client from './apollo/apolloClient';
import { AuthProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
