import './globals.css';
import { profile } from './profile';

export const metadata = {
  title: `Portfolio | ${profile.fullName}`,
  description: profile.about,
};

// Applique le thème (clair/sombre) avant l'affichage pour éviter un flash
const themeScript = `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
