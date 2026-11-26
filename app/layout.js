import './globals.css';
import { profile } from './profile';

export const metadata = {
  title: `Portfolio | ${profile.fullName}`,
  description: profile.about,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
