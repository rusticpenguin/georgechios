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
            <li className="navHome"><Link to='/'>Home</Link></li>
            <li className="navAbout"><Link to='/about'>About</Link></li>
            <li className="navProjects"><Link to='/projects'>Projects</Link></li>
            <li className="navMeetups"><Link to='/meetups'>Meetups</Link></li>
            <li className="navPenguin"><a href="https://www.rusticpenguin.com"><img src="https://via.placeholder.com/90x90" alt="Rustic Penguin"></img></a></li>
          </ul>
        </nav>
      </header>
    );
	}
}

export default Header;