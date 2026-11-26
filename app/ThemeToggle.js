'use client';

import { useEffect, useState } from 'react';

// v2 : bouton Dark Mode (thème mémorisé dans le navigateur)
export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'light');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
    setTheme(next);
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Changer de thème">
      {theme === 'dark' ? '☀️ Mode clair' : '🌙 Mode sombre'}
    </button>
  );
}
