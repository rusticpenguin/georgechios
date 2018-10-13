import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return ( 
      <footer>
        <span>This is a <Link to='/'>footer</Link></span>
      </footer>
    );
	}
}

export default Footer;