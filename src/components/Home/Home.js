import React from 'react';
import { particlesOpt } from '../../utils/particlesOptions.js';
import Particles from 'react-particles-js';
import './Home.scss';

export default function Home() {
  return (
    <section id="home">
      <div className="title__container">
        <h1 className="main__title">aia rupsom</h1>
        <h2 className="main__position">front end developer</h2>
      </div>
      <Particles params={particlesOpt} />
    </section>
  );
}
