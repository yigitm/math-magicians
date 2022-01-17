import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './components/Home';

describe('Home', () => {
  test('home', () => {
    render(<Home />);
    const linkElement = screen.getByText('Welcome to our page!');
    expect(linkElement).toBeInTheDocument();
  });
});
