import React, { Component } from 'react';
import Email from '../email.svg';

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="emailMe link">Email Me!</a>
          <a href="#" className="emailMobile"><svg className="emailIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg></a>

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