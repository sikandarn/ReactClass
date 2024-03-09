import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('renders the calculator with initial display value', () => {
  const { getByText } = render(<Calculator />);
  const displayElement = getByText('0');
  expect(displayElement).toBeInTheDocument();
});

test('updates display when buttons are clicked', () => {
  const { getByText } = render(<Calculator />);
  const displayElement = getByText('0');

  // Click some buttons
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  
  // Expect the display to update
  expect(displayElement).toHaveTextContent('3');
});

test('clears display when clear button is clicked', () => {
  const { getByText } = render(<Calculator />);
  const displayElement = getByText('0');

  // Click some buttons
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('C'));
  
  // Expect the display to clear
  expect(displayElement).toHaveTextContent('0');
});
