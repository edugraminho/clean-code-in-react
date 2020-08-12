import React from 'react';
import PageOne from './components/page-one'
import PageTwo from './components/page-two'
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ul>
          <li>
            <Link to="/"> Page One </Link>
          </li>

          <li>
            <Link to="/page-two"> Page Two </Link>
          </li>
        </ul>


        <Switch>

          <Route exact path="/page-two">
            <PageTwo />
          </Route>

          <Route path="/">
            <PageOne />
          </Route>

        </Switch>

      </header>
    </div>
  );
}

export default App;
