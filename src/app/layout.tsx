import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red-hat-display',
});

export const metadata: Metadata = {
  title: 'order-summary-component',
  description: 'frontend mentor challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={redHatDisplay.variable}>
      <body className="antialiased w-dvw h-dvh bg-blue-100 flex justify-center items-center">{children}</body>
    </html>
  );
}
