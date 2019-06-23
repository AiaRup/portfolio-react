import React from 'react';
import './Progress.scss';
import PropTypes from 'prop-types';

const Filler = props => {
  return <div className="progress__fill" style={{ width: `${props.percentage}%` }} />;
};

export default function Progress({ percentage }) {
  return (
    <div className="progress__bar">
      <Filler percentage={percentage} />
    </div>
  );
}

Filler.propTypes = {
  percentage: PropTypes.number
};
