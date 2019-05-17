import React, { Component } from 'react';
import './App.scss';
import Particles from 'react-particles-js';
import ProjectsList from './components/Project/ProjectsList';
import Menu from './components/Menu/Menu';
import { particlesOpt } from './utils/particlesOptions.js';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header className="page__header">
          <Menu />
          <div className="title__container">
            <h1 className="main__title">aia rupsom</h1>
            <h2 className="main__position">front end developer</h2>
          </div>
          <Particles params={particlesOpt} />
        </header>
        <main className="page__main">
          <section id="page__projects">
            <ProjectsList />
          </section>
          <section id="page__about">{/* <About /> */}</section>
          <section id="page__contact">{/* <Contact /> */}</section>
        </main>
        <footer className="page__footer">dd</footer>
      </div>
    );
  }
}

export default App;
