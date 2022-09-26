import useAppStore, { Themes } from '@store/store.app';
import cn from 'classnames';
import useAppThemeStyles from '@hooks/useAppThemeStyles';
import styles from './header.module.scss';

const Header = () => {
  const theme = useAppStore(state => state.theme);
  const setTheme = useAppStore(state => state.setTheme);
  const headerStyles = cn(styles.header, useAppThemeStyles());
  return (
    <header className={headerStyles}>
      <p>This is the header - {theme}</p>
      <button onClick={() => setTheme(Themes.light)}>Light</button>
      <button onClick={() => setTheme(Themes.dark)}>Dark</button>
    </header>
  );
};

export default Header;
