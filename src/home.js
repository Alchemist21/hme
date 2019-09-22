import React from 'react';
import logo from './hme.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header className="App-header home__image" >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the New York City Government Blockchain 
        </p> 
        <a class="waves-effect waves-light btn">Register</a>
       <Link to="Login" >
      
        <a class="waves-effect waves-light btn">Login</a>
       </Link>

        
      </header>
    )
}

export default Home;