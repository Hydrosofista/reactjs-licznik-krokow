import React from 'react';
import './ButtonsPanel.css';

const ButtonsPanel = ({ updateCounter, stepValue, counter }) => {
  return (
    <div className="buttonsPanel">
      <button onClick={() => updateCounter(1)}>Add 1</button>
      <button onClick={() => updateCounter(stepValue)}>Zwiększ o {stepValue}</button>
      <button onClick={() => updateCounter(-counter)}>Reset</button>
    </div>
  );
};

export default ButtonsPanel;
