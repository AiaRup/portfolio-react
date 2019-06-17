import React from 'react';
import './About.scss';
import twitter from '../../images/icons/twitter-red.png';
import github from '../../images/icons/github-yellow.png';
import linkedin from '../../images/icons/linkedin-blue.png';
import email from '../../images/icons/email-purple.png';

export default function About() {
  return (
    <section id="about">
      <aside className="about__links">
        <a className="about__link" href="https://github.com/AiaRup" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${github})` }}>
          github
        </a>
        <a className="about__link" href="https://www.linkedin.com/in/aia-rupsom/" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${linkedin})` }}>
          linkedin
        </a>
        <a className="about__link" href="https://twitter.com/AiaRupsom" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${twitter})` }}>
          twitter
        </a>
        <a className="about__link" href="mailto:aiale88@gmail.com" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${email})` }}>
          email
        </a>
      </aside>
      <article className="about__text">
        I have a B.Sc in Biotechnology, but I'm a <span className="about__emphasis">front-end developer</span> with a passion for creating new things. I have the necessary abilities to improvise, grasp new skills and pay attention to the smallest detail. I plan to pursue my career as a front-end
        developer where I could use the knowledge Iacquired in the 2 front-end courses I did - <span className="about__emphasis">Adalab</span> (in Spain) and <span className="about__emphasis">Google’s Talent Digital</span> (in Israel). I hope to have the opportunity to show my motivation, my
        curiosity for the programming world and my abilities as an <span className="about__emphasis">autodidact</span>, <span className="about__emphasis">creative</span> and <span className="about__emphasis">team player person</span>.
      </article>
    </section>
  );
}
