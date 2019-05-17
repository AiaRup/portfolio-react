import React, { Component } from 'react';
import './App.scss';
import Particles from 'react-particles-js';
import ProjectsList from './components/Project/ProjectsList';

const particlesOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#3CA9D1',
        blur: 5
      }
    }
  }
};
class App extends Component {
  render() {
    return (
      <div className="page">
        <section id="page__intro">
          <Particles params={particlesOpt} />
        </section>
        <section id="page__projects">
          <h2>projects</h2>
          <ProjectsList />
        </section>
      </div>
    );
  }
}

export default App;
