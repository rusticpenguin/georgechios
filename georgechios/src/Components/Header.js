import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return ( 
      <header>
        <div className="center">
          <div className="nameAndLogo">
            <Link to='/'>
              <img className="logoImage" src="https://via.placeholder.com/90x90" alt="logo" />
            </Link>
            <Link to='/'>
                <h1> George Chios </h1>
            </Link>
          </div>
        </div>
        <nav>
          <ul>
            <Link to='/'><li className="navHome">Home</li></Link>
            <Link to='/about'><li className="navAbout">About</li></Link>
            <Link to='/projects'><li className="navProjects">Projects</li></Link>
            <Link to='/meetups'><li className="navMeetups">Meetups</li></Link>
            <li className="navPenguin"><a href="https://www.rusticpenguin.com"><img src="https://via.placeholder.com/90x90" alt="Rustic Penguin"></img></a></li>
          </ul>
        </nav>
      </header>
    );
	}
}

export default Header;