import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProjectsList from './components/Project/ProjectsList';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu.js';
import About from './components/About/About.js';
import Skills from './components/Skills/SkillList.js';
// import Contact from './components/Contact/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header className="page__header">
          <Menu />
        </header>
        <main className="page__main">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/projects" component={ProjectsList} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            {/* <Route path="/contact" component={Contact} /> */}
            <Redirect from="/" to="/Home" />
            {/* <Route component={Home} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
