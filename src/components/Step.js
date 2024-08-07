import React from 'react';

const Step = ({ stepValue, setStep }) => {
  return (
    <div className="step">
      <label>
        <span className="steptext">Krok: </span>
        <input 
          type="number" 
          value={stepValue} 
          onChange={(e) => setStep(Math.max(1, Number(e.target.value)))} 
        />
      </label>
    </div>
  );
};

export default Step;
