import React from 'react';
import logo from './hme.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome
        </p>
       <Link to="Login" >
           Login
       </Link>

        
      </header>
    )
}

export default Home;