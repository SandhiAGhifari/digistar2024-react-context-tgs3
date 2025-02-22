import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const mode = lightModeMediaQuery.matches ? 'light' : 'dark';

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevThem === 'light' ? 'dark' : 'light'));
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider

ThemeProvider.PropTypes = {
    children: PropTypes.node.isRequired,
};