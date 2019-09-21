import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Login from './Login';

function App() {
  return (
    <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
