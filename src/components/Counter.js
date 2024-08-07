import React, { useState } from 'react';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';
import './Counter.css';

const Counter = ({ initValue }) => {
  const [counter, setCounter] = useState(initValue);
  const [stepValue, setStepValue] = useState(1);

  const updateCounter = (value) => {
    if (value === -counter) {
      setCounter(0);
    } else {
      setCounter(counter + value);
    }
  };

  return (
    <div id="counter">
      <Display currentValue={counter} />
      <ButtonsPanel 
        updateCounter={updateCounter} 
        stepValue={stepValue} 
        counter={counter}
      />
      <Step stepValue={stepValue} setStep={setStepValue} />
    </div>
  );
};

export default Counter;
