import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Meetups from './Meetups';
import PageNotFound from './PageNotFound'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/meetups' component={Meetups}/>
          <Route path='/error' component={PageNotFound} />
          <Redirect from='*' to='/error' />
        </Switch>
      </main>
    );
	}
}

export default Main;