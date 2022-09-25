import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

describe('<HomePage>', () => {
  it('should render text', () => {
    render(<HomePage />);
    expect(screen.getByText('This is the home page!', { exact: false })).toBeInTheDocument();
  });
});
