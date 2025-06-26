import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Название сайта',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

import { Roboto } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={roboto.className}>
      <head>
        <title>Product</title>
        <link rel='icon' type='image/png' href='/favicons/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' type='image/svg+xml' href='/favicons/favicon.svg' />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <meta name='apple-mobile-web-app-title' content='MyWebSite' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
      </head>

      <body className='flex flex-col h-screen'>
        <Header />
        <main className='flex justify-center items-center grow'> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
