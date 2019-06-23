import React from 'react';
import './Skills.scss';
import { dataSkills } from '../../utils/skillsData';
import PieOuter from './PieOuter/PieOuter';

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills__front-end">
        <h3 className="skills__title">
          <span className="title__lines">Front-End</span>
        </h3>
        <div className="pies__container">
          {dataSkills.front.map(pie => (
            <PieOuter text={pie.name} value={pie.value} color={pie.color} key={pie.name} />
          ))}
        </div>
      </div>
      <div className="skills__back-end">
        <h3 className="skills__title">
          <span className="title__lines">Back-End</span>
        </h3>
        <div className="pies__container">
          {dataSkills.back.map(pie => (
            <PieOuter text={pie.name} value={pie.value} color={pie.color} key={pie.name} />
          ))}
        </div>
      </div>
      <div className="skills__design">
        <h3 className="skills__title">
          <span className="title__lines">Design & Tools</span>
        </h3>
        <div className="pies__container pies__design">
          {dataSkills.design.map(pie => (
            <PieOuter text={pie.name} value={pie.value} color={pie.color} key={pie.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
