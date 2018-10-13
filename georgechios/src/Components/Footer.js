import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return ( 
      <footer>
        <span>This site was designed and created by <Link className="link" to='https://www.linkedin.com/in/georgechios/'>George Chios</Link> &copy; 2018 </span>
      </footer>
    );
	}
}

export default Footer;