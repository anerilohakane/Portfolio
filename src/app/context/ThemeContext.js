'use client';

import React, { createContext, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = 'dark'; // Force dark theme

  useEffect(() => {
    // Always apply dark theme
    document.documentElement.classList.add('dark');
    // Remove any previously saved theme preference from localStorage as it's no longer needed
    localStorage.removeItem('theme'); 
  }, []);

  return (
    // Provide only the theme value, as toggleTheme is no longer needed
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  // Consumers of useTheme will now only get 'theme', not 'toggleTheme'
  return context;
};
