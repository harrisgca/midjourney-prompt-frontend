import useAppStore, { Themes } from '@store/store.app';
import useAppThemeStyles from '@hooks/useAppThemeStyles';
import { act, renderHook, waitFor } from '@testing-library/react';

describe('useAppThemeStyles', () => {
  it('should should return the proper style based on zustand state', async () => {
    const appStore = renderHook(useAppStore);
    const initialStyles = renderHook(useAppThemeStyles);
    expect(initialStyles.result.current).toEqual('themeLight');
    // @ts-expect-error
    const { setTheme }: { setTheme: (newTheme: Themes) => void } = appStore.result.current;

    // change to dark
    act(() => setTheme(Themes.dark));
    await waitFor(() => expect(initialStyles.result.current).toEqual('themeDark'));

    // change back to light
    act(() => setTheme(Themes.light));
    await waitFor(() => expect(initialStyles.result.current).toEqual('themeLight'));
  });
});
