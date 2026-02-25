import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';
import PatternBackgroundMobile from '@/components/icons/PatternBackgroundMobile';
import PatternBackgroundDesktop from '@/components/icons/PatternBackgroundDesktop';

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
      <body className="antialiased w-dvw h-dvh flex justify-center items-center relative overflow-hidden bg-blue-100">
        <PatternBackgroundMobile className="absolute top-0 left-0 w-full block md:hidden z-0" />
        <PatternBackgroundDesktop className="absolute top-0 left-0 w-full hidden md:block z-0" />
        <div className="z-10">{children}</div>
      </body>
    </html>
  );
}
