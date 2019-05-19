import React from 'react';
import Project from './Project';
import './ProjectsList.scss';
import { projectsArr } from '../../utils/projectsData.js';

export default function ProjectsList() {
  return (
    <section id="page__projects">
      <ul className="projects__list">
        {projectsArr.map(project => {
          return (
            <li className={`project__item ${project.classStyle}`} key={project.id}>
              <Project projectData={project} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
