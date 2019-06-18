import React, { Component } from 'react';
import './Skills.scss';
import { dataSkills } from '../../utils/skillsData';

export default class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div className="skills__front-end">
          <h3 className="skills__title">
            <span className="title__lines">Front-End</span>
          </h3>
        </div>
        <div className="skills__back-end">
          <h3 className="skills__title">
            <span className="title__lines">Back-End</span>
          </h3>
        </div>
        <div className="skills__design">
          <h3 className="skills__title">
            <span className="title__lines">Design & Tools</span>
          </h3>
        </div>
      </section>
    );
  }
}
