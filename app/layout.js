import './globals.css';

export const metadata = {
  title: 'Reflex Arena',
  description: 'A browser reflex game that measures speed and accuracy while presenting competitive results through a leaderboard flow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
