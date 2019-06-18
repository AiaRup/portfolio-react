import React, { Component } from 'react';
import './App.scss';

import ProjectsList from '../Project/ProjectsList';
import Home from '../Home/Home';
import Menu from '../Menu/Menu.js';
import About from '../About/About.js';
import Skills from '../Skills/Skills.js';
import Contact from '../Contact/Contact.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/contact')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

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
