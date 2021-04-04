import { render, screen } from '@testing-library/react';
import React, { Component } from 'react';
import App from './components/App';
import './../styles/App.css';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
