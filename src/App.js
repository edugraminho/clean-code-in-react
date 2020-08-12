import React from 'react';
import Router from './components/router'
import Links from './components/links'

import './App.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">

        <Links />

        <Router />

      </header>
    </div>
  );
}

export default App;
