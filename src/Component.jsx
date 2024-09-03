import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext.jsx';

export default function Component() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  const mode = lightModeMediaQuery.matches ? 'light' : 'dark';

  useEffect(() => {
    const root = document.getElementById('root');

    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    toggleTheme();
  };

  return (
    <div className="card">
      <h1>Hands-on React Context</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={handleChangeTheme}>
        Change Theme
      </button>
    </div>
  )
}
