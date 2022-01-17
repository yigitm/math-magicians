import { render, screen } from '@testing-library/react';
import Home from './components/Home';
import React from 'react';

describe('Home', () => {
  test('home', () => {
    render(<Home />);
    const linkElement = screen.getByText('Welcome to our page!');
    expect(linkElement).toBeInTheDocument();
  });
});
