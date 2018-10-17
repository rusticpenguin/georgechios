import React, { Component } from 'react'; 

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="aboutTitle">
            <h2>Hello, I am George Chios!</h2>
            <a href="#" className="emailMe link">Email Me!</a>
          </div>
          <article className="pictureLeft">
            <img className="articlePicture" src="https://via.placeholder.com/300x300" alt="Profile Picture of George" />
            <div className="aboutMe">
              <p>I do a lot of different things. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <button className="resumeButton">- My Resume -</button>
              <a href="#" className="emailMobile"><svg className="emailIcon invert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg></a>
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
        <hr />
        <div className="socialMedia">
          <a href="https://twitter.com/imrusticpenguin" target="_blank" className="twitter"><svg className="invert buttonSvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
          <a href="https://github.com/rusticpenguin" target="_blank" className="github"><svg className="invert buttonSvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          <a href="https://www.youtube.com/channel/UCXvjbLXk85PIhrkWgCdb9TA" target="_blank" className="youtube"><svg className="invert buttonSvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
          <a href="https://www.linkedin.com/in/georgechios/" target="_blank" className="linkedIn"><svg className="invert buttonSvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
        </div>
        <hr />
        <div className="timeline">
          <h2>The Timeline</h2>
          <article>
            <img className="articlePicture" src="https://via.placeholder.com/900x400" alt="Profile Picture of George" />
            <h3>blah blah blah</h3>
            <p>Stuff will go here</p>

            <p>lorem ipsum and i didnt want to copy and paste that. So I'll just paste this. lorem ipsum and i didnt want to copy and paste that. So I'll just paste this. lorem ipsum and i didnt want to copy and paste that. So I'll just paste this.</p>
          </article>
        </div>
      </div>
    );
	}
}

export default About;