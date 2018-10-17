import React, { Component } from 'react';
import './Home.css';
import SocialMedia from './SocialMedia';

class Home extends Component {
  render() {
    return ( 
      <section>
        <h2 className="welcomeHome">Welcome To My Website!</h2>
        <hr />
        <SocialMedia />

      </section>
    );
	}
}

export default Home;