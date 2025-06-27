'use client';

import React from 'react';
import PromoItem from '@/components/promoItem';
import { promo } from '@/components/api';
import SwiperRender from '@/components/swiperRender';
import useIsMobile from '@/customHooks/useIsMobile';

export interface PromoProductsProps {}

const PromoProducts = ({}: PromoProductsProps) => {
  const isMobile = useIsMobile(1280);

  if (isMobile) {
    return <SwiperRender item={promo} />;
  }
  return (
    <>
      <div className='hidden mx-auto xl:block'>
        <div className='pt-[15px] pb-10 mx-auto text-[1rem] leading-[1.2]'>
          <h3 className='mb-[30px] font-normal text-[1.875em]  text-[#33485d]'>Тестовые товары</h3>
          <ul className='grid grid-cols-5 gap-4 cursor-pointer justify-items-center'>
            {promo.map((item, index) => (
              <li key={index} className='relative'>
                <PromoItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PromoProducts;
