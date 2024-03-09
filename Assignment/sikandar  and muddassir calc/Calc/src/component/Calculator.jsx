import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';
import '../css/style.css'

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression and update the display
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      // Handle error (e.g., division by zero)
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  return (
    <div className="calculator">
      <CalculatorDisplay value={displayValue} />
      <div className="buttons">
        <CalculatorButton onClick={() => handleButtonClick('7')} value="7" />
        <CalculatorButton onClick={() => handleButtonClick('8')} value="8" />
        <CalculatorButton onClick={() => handleButtonClick('9')} value="9" />
        <CalculatorButton onClick={() => handleButtonClick('/')} value="/" />
        <CalculatorButton onClick={() => handleButtonClick('4')} value="4" />
        <CalculatorButton onClick={() => handleButtonClick('5')} value="5" />
        <CalculatorButton onClick={() => handleButtonClick('6')} value="6" />
        <CalculatorButton onClick={() => handleButtonClick('*')} value="*" />
        <CalculatorButton onClick={() => handleButtonClick('1')} value="1" />
        <CalculatorButton onClick={() => handleButtonClick('2')} value="2" />
        <CalculatorButton onClick={() => handleButtonClick('3')} value="3" />
        <CalculatorButton onClick={() => handleButtonClick('-')} value="-" />
        <CalculatorButton onClick={() => handleButtonClick('0')} value="0" />
        <CalculatorButton onClick={() => handleButtonClick('.')} value="." />
        <CalculatorButton onClick={handleCalculate} value="=" />
        <CalculatorButton onClick={handleClear} value="C" />
        <CalculatorButton onClick={() => handleButtonClick('+')} value="+" />
      </div>
    </div>
  );
}

export default Calculator;
