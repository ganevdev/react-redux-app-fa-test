import './App.css';

import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Loading from '../Loading';
import UserPage from '../UserPage';
import UsersList from '../UsersList';

function App() {
  return (
    <Router>
      <main className="App">
        <div>
          <Link to={`/`}>
            <h1>Список Юзеров</h1>
          </Link>
          <Loading />
          <Route exact path="/">
            <UsersList />
          </Route>
          <Route path="/user/:id" component={UserPage} />
        </div>
      </main>
    </Router>
  );
}

export default App;
