import React from 'react';
import PromoItem from '@/components/promoItem';
import { promo } from '@/components/api';

export interface PromoProductsProps {}

const PromoProducts = ({}: PromoProductsProps) => {
  return (
    <div className='mx-auto'>
      <div className='pt-[15px] w-full pb-10 mx-auto'>
        <h3 className='mb-[30px] font-normal text-[30px] leading-[1.2] text-[#33485d]'>
          Тестовые товары
        </h3>
        <ul className='grid grid-cols-5 gap-4 cursor-pointer justify-items-center'>
          {promo.map((item, index) => (
            <li key={index} className='relative'>
              <PromoItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PromoProducts;
