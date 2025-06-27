'use client';

import React, { useState } from 'react';
import SvgIcon from '@/components/svgIcon';

export interface SpecificationsProps {
  Type: string;
  Serial_Number: string;
  Brand: string;
  Country_Of_Origin: string;
  Material: string;
  Weight: string;
  Dimensions: string;
  Compatibility: string;
  Warranty: string;
}

interface productSpecificationsState {
  productDescription: SpecificationsProps;
}

const ProductSpecifications = ({ productDescription }: productSpecificationsState) => {
  const [visible, setVisible] = useState<number>(3);
  const handleOnClick = () => {
    setVisible(Object.keys(productDescription).length);
  };
  return (
    <div
      className='grid col-span-1 md:col-start-2 md:col-end-7 text-[0.75rem] lg:text-[0.875rem] xl:text-[1rem]
         font-normal leading-[1.2] py-[10px] md:py-0'
    >
      <div>
        <h3 className='text-[1.875em] text-[#33485d] text-center sm:text-left mb-8 min-h-[48px]'>
          Характеристики
          <span className='text-[#219653]'> Тестового товара для верстки</span>
        </h3>

        <ul className='content-between mb-4 mx-auto sm:mx-0 max-w-[313px] font-medium text-[1em] leading-[1.9] text-[#33485d]'>
          {Object.entries(productDescription).map(([key, value], index) =>
            index < visible ? (
              <li key={key} className='flex items-baseline'>
                <span className='whitespace-nowrap'>{key}</span>
                <span className='flex-grow border-b border-dotted border-[#dde8f0] mx-2' />
                <span className='text-right'>{value}</span>
              </li>
            ) : null,
          )}
        </ul>

        {visible < Object.keys(productDescription).length ? (
          <button
            type='button'
            aria-label='Open More Characteristics'
            onClick={handleOnClick}
            className='flex items-baseline gap-3 mx-auto sm:mx-0 hover:opacity-50 transition duration-700 ease-in-out'
          >
            <span
              className="relative font-medium text-[1em] text-[#33485d] after:absolute after:content-[''] after:left-0 after:-bottom-1
             after:border-b after:w-full after:border-[#5c6d7d] after:opacity-50"
            >
              Все Характеристики
            </span>
            <SvgIcon name={'Path-right'} style={'w-1.5 h-[9px] fill-[#33485d]'} />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ProductSpecifications;
