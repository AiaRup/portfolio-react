import React from 'react';

export default function Project(props) {
  const { title } = props;
  return (
    <div className="project__content">
      <h2 className="project__title">{title}</h2>
    </div>
  );
}
