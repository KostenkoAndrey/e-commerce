'use client';

import React from 'react';
import Header from '@/components/header';
import Path from '@/components/path';
import ProductDatails from '@/components/productDatails';
import PromoProducts from '@/components/promoProducts';
import CallbackForm from '@/components/callbackForm';
import Footer from '@/components/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className='bg-gradient-to-b from-green-600 to-white pt-[30px] mx-auto'>
        <div className='w-[1520px] mx-auto px-10 pb-10 bg-white'>
          <Path />
          <ProductDatails />
          <PromoProducts />
          <CallbackForm />
        </div>
        <Footer />
      </div>
    </>
  );
}
