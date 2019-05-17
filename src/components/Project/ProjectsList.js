import React from 'react';
import Project from './Project';
import './ProjectsList.scss';

const projectsArr = [
  {
    id: 1,
    title: 'siscode',
    url: '',
    description: '',
    background: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'siscode',
    url: '',
    description: '',
    background: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'siscode',
    url: '',
    description: '',
    background: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    title: 'siscode',
    url: '',
    description: '',
    background: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    title: 'siscode',
    url: '',
    description: '',
    background: 'https://via.placeholder.com/150'
  }
];

export default function ProjectsList() {
  return (
    <ul className="projects__list">
      {projectsArr.map(project => {
        return (
          <li className="project__item" key={project.id}>
            <Project title={project.title} />
          </li>
        );
      })}
    </ul>
  );
}
