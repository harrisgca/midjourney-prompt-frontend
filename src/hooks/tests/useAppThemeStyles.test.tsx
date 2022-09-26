import useAppStore, { Themes } from '@store/store.app';
import useAppThemeStyles from '@hooks/useAppThemeStyles';
import { act, renderHook } from '@testing-library/react';

describe('useAppThemeStyles', () => {
  it('should should return the proper style based on zustand state', () => {
    const appStore = renderHook(useAppStore);
    const initialStyles = renderHook(useAppThemeStyles);
    expect(initialStyles.result.current).toEqual('themeLight');
    // @ts-expect-error
    const { setTheme }: { setTheme: (newTheme: Themes) => void } = appStore.result.current;

    // change to dark
    act(() => setTheme(Themes.dark));
    const stylesTwo = renderHook(useAppThemeStyles);
    expect(stylesTwo.result.current).toEqual('themeDark');

    // change back to light
    act(() => setTheme(Themes.light));
    const stylesThree = renderHook(useAppThemeStyles);
    expect(stylesThree.result.current).toEqual('themeLight');
  });
});
