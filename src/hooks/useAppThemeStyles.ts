import cn from 'classnames';
import useAppStore, { Themes } from '@store/store.app';

const useAppThemeStyles = () => {
  const theme = useAppStore(state => state.theme);
  // themeDark and themeLight are defined in the global CSS. See src/styles/global/main.scss
  return cn({
    themeDark: theme === Themes.dark,
    themeLight: theme === Themes.light,
  });
};

export default useAppThemeStyles;
