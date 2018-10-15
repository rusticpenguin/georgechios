import React, { Component } from 'react';

class About extends Component {
  render() {
    return ( 
      <div>
        <div>
          <a href="#" className="emailMe link">Email Me!</a>
          <h2>Hello, I am George Chios!</h2>
          <article className="pictureLeft">
            <img className="articlePicture" src="https://via.placeholder.com/300x300" alt="Profile Picture of George" />
            <div className="aboutMe">
              <p>I do a lot of different things. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <button className="resumeButton">- My Resume -</button>
            </div>
          </article>
        </div>
        <hr />
        <div>
          <h2>Software Developer, Game Designer, Audio Engineer</h2>
          <article>
            <img className="articlePicture" src="https://via.placeholder.com/900x300" alt="Profile Picture of George" />
            <div className="threeColumns">
              <section className="column">
                <h3>Software Development</h3>
                <p>I do a lot of different things. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </section>
              <section className="column">
                <h3>Game Design</h3>
                <p>I do a lot of different things. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </section>
              <section className="column">
                <h3>Audio Engineering</h3>
                <p>I do a lot of different things. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </section>
            </div>
          </article>
        </div>
      </div>
    );
	}
}

export default About;