import { ProviderWrapper } from '@global/tests/utils';
import { renderHook, waitFor } from '@testing-library/react';
import useFetchCategories from '@queries/categories/useFetchCategories';
import { mswJestSetup } from '@tests/msw/server';
import categories1 from '@tests/fixtures/categories.1.json';

describe('useFetchCategories()', () => {
  mswJestSetup();

  it('should return the list of categories on fetch', async () => {
    const { result } = renderHook(useFetchCategories, { wrapper: ProviderWrapper });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(categories1);
  });
});
