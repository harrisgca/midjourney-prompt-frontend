import { ProviderWrapper } from '@global/tests/utils';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import useFetchCategories, { useCustomHook } from '@queries/categories/useFetchCategories';
import { server } from '@tests/msw/server';
import categories1 from '@tests/fixtures/categories.1.json';

describe('useFetchCategories()', () => {
  beforeAll(() =>
    server.listen({
      onUnhandledRequest(req) {
        console.error('Found an unhandled %s request to %s', req.method, req.url.href);
      },
    }),
  );
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should return the list of categories on fetch', async () => {
    const { result } = renderHook(useFetchCategories, { wrapper: ProviderWrapper });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(categories1);
  });
});
