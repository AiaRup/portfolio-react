import React, { Component } from 'react';
import './App.scss';

import ProjectsList from '../Project/ProjectsList';
import Home from '../Home/Home';
import Menu from '../Menu/Menu.js';
import About from '../About/About.js';
import Skills from '../Skills/SkillList.js';
import Contact from '../Contact/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header className="page__header">
          <Menu />
        </header>
        <main className="page__main">
          <Home />
          <About />
          <ProjectsList />
          <Skills />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
