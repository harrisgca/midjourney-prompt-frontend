import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';

describe('<HomePage>', () => {
  it('should render text', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
    expect(screen.getAllByText('This is the home page!', { exact: false }).length).toBeGreaterThanOrEqual(1);
  });
});
