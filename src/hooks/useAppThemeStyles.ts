import cn from 'classnames';
import useAppStore, { Themes } from '@store/store.app';

/** Read Zustand state and return a CSS class. themeDark and themeLight are defined in the global CSS. See src/styles/global/main.scss */
const useAppThemeStyles = () => {
  const theme = useAppStore(state => state.theme);
  return cn({
    themeDark: theme === Themes.dark,
    themeLight: theme === Themes.light,
  });
};

export default useAppThemeStyles;
