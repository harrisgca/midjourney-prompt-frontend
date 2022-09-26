import useAppStore, { Themes } from '@store/store.app';
import cn from 'classnames';
import useAppThemeStyles from '@hooks/useAppThemeStyles';
import LightDarkSwitch from '@components/LightDarkSwitch';
import Grid from '@mui/material/Unstable_Grid2';
import styles from './header.module.scss';

const Header = () => {
  const theme = useAppStore(state => state.theme);
  const setTheme = useAppStore(state => state.setTheme);
  const headerStyles = cn(styles.header, useAppThemeStyles());

  const onSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? Themes.dark : Themes.light);
  };

  return (
    <header className={headerStyles}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={6}>
          <p className={styles.left}>This is the header</p>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <LightDarkSwitch onSwitchChange={onSwitchChange} isLightMode={theme === Themes.light} className={styles.right} />
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
