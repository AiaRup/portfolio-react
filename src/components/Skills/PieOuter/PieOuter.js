import React from 'react';
import './PieOuter.scss';
import { calculatePercentage } from '../../../utils/paintCircle';
import PropTypes from 'prop-types';

export default function PieOuter({ text, value, color }) {
  return (
    <div className="pie__details">
      <div className="pie__border" style={{ backgroundColor: color, backgroundImage: calculatePercentage(value, color) }}>
        <div className="pie__wrapper">
          <span className="pie__text">{text}</span>
        </div>
      </div>
    </div>
  );
}

PieOuter.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.string
};
