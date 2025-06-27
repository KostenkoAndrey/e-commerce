import React from 'react';
import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Product',
  description: 'Product description',
};

import Path from '@/components/path';

const ProductDetails = dynamic(() => import('@/components/productDetails'));
const PromoProducts = dynamic(() => import('@/components/promoProducts'));
const CallbackForm = dynamic(() => import('@/components/callbackForm'));

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
