import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header/Header';
import { Page } from './components/Page/Page';
import './globals.sass';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Page />
    </div>
  );
};


ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <App />,
);

