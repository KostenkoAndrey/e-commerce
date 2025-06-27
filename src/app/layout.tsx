import React from 'react';
import './globals.css';

import { Roboto } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Main',
  description: 'Main page',
  icons: {
    icon: '/favicons/favicon-32x32.png',
    apple: '/favicons/apple-touch-icon.png',
    shortcut: '/favicons/favicon.ico',
  },
  manifest: '/favicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={roboto.className}>
      <body className='flex flex-col h-screen'>
        <Header />
        <main className='flex justify-center items-center grow'> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
