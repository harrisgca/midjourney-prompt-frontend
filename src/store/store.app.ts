import create from 'zustand';

export enum Themes {
  light = 'light',
  dark = 'dark',
}

type AppState = {
  theme: Themes;
  setTheme: (newTheme: Themes) => void;
};

const useAppStore = create<AppState>(set => ({
  theme: Themes.light,
  setTheme: newTheme => set({ theme: newTheme }),
}));

export default useAppStore;
