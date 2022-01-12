import { render, screen } from '@testing-library/react';
import App from './App';

describe('checks the home page', () => {
  test('checks for home page header exist ', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to our page!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
