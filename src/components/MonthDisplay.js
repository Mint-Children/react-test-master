import React from 'react';

function MonthDisplay({ month }) {
  return (
    <div className="month-display">
      <span className="current-month">{month}월</span>
    </div>
  );
}

export default MonthDisplay;
