// src/components/ThemeSwitcher/ThemeSwitcher.tsx
import React from 'react';

const ThemeSwitcher: React.FC = () => {
  const themes = ["light", "dark", "corporate"];

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    document.documentElement.setAttribute('data-theme', event.target.value);
  };

  return (
    <select 
      className="select select-bordered select-sm"
      onChange={handleThemeChange}
      defaultValue="light"
    >
      {themes.map((theme) => (
        <option key={theme} value={theme}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default ThemeSwitcher;