import React from 'react';
import './Progress.scss';

const Filler = props => {
  return <div className="progress__fill" style={{ width: `${props.percentage}%` }} />;
};

export default function Progress(props) {
  return (
    <div className="progress__bar">
      <Filler percentage={props.percentage} />
    </div>
  );
}
