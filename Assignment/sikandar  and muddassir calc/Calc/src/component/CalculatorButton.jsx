import React from 'react';

function CalculatorButton({ onClick, value }) {
  return (
    <button className="button" onClick={onClick}>
      {value}
    </button>
  );
}

export default CalculatorButton;
