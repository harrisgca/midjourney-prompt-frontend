import { render, screen } from '@testing-library/react';
import { ProviderWrapper } from '@global/tests/utils';
import HomePage from '../HomePage';

describe('<HomePage>', () => {
  it('should render text', () => {
    render(
      <ProviderWrapper>
        <HomePage />
      </ProviderWrapper>,
    );
    // screen.debug();
    expect(screen.getAllByText('This is the home page!', { exact: false }).length).toBeGreaterThanOrEqual(1);
  });
});
