import React from 'react';
import Path from '@/components/path';
import ProductDetails from '@/components/productDetails';
import PromoProducts from '@/components/promoProducts';
import CallbackForm from '@/components/callbackForm';

export const metadata = {
  title: 'Product',
  description: 'Product description',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className='bg-gradient-to-b from-green-600 to-white pt-[30px] mx-auto w-full'>
        <div className='max-w-[1520px] mx-auto px-[10px] xl:px-10 pb-10 bg-white'>
          <Path />
          <ProductDetails />
          <PromoProducts />
          <CallbackForm />
        </div>
      </div>
    </>
  );
}
