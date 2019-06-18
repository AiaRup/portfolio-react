import React from 'react';
import './PieCircle.scss';

export default function PieOCircle() {
  return (
    <div class="pie-wrapper progress-45 style-2">
      <span class="label">
        45<span class="smaller">%</span>
      </span>
      <div class="pie">
        <div class="left-side half-circle" />
        <div class="right-side half-circle" />
      </div>
      <div class="shadow" />
    </div>
  );
}
