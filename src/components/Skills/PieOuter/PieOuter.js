import React from 'react';
import './PieOuter.scss';

export default function PieOuter() {
  return (
    <div class="pie-wrapper progress-30">
      <span class="label">
        30<span class="smaller">%</span>
      </span>
      <div class="pie">
        <div class="left-side half-circle" />
        <div class="right-side half-circle" />
      </div>
    </div>
  );
}
