import { render, screen } from '@testing-library/react';
import { ProviderWrapper } from '@global/tests/utils';
import HomePage from '../HomePage';
import { mswJestSetup } from '@tests/msw/server';
import categories1 from '@tests/fixtures/categories.1.json';
import { PROMPTS } from '@tests/msw/handlers';

describe('<HomePage>', () => {
  const server = mswJestSetup();

  const renderPage = () =>
    render(
      <ProviderWrapper>
        <HomePage />
      </ProviderWrapper>,
    );

  it('should render error text when there is an API error', async () => {
    renderPage();
    server.use(PROMPTS.ALL.GET_WITH_ERROR);
    expect(await screen.findByText('Error Occurred')).toBeInTheDocument();
  });

  it('should render the category names after page load', async () => {
    renderPage();
    for (let index = 0; index < categories1.length; index++) {
      const element = categories1[index];
      expect(await screen.findByText(element.text)).toBeInTheDocument();
    }
  });
});
