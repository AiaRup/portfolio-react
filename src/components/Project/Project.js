import React from 'react';
import './Project.scss';

export default function Project(props) {
  const {
    projectData: { title }
  } = props;
  return (
    <div className="project__content">
      <h2 className="project__title">{title}</h2>
    </div>
  );
}
