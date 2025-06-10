import React from 'react';

export interface ProductSpecificationsProps {
  type: string;
  serialNumber: string;
  brand: string;
}

const ProductSpecifications = ({
  type,
  serialNumber,
  brand,
}: ProductSpecificationsProps) => {
  return (
    <div className='w-[588px] justify-self-end'>
      <h3 className='font-normal text-[30px] leading-[1.2] text-[#33485d] mb-8'>
        Характеристики
        <span className='font-normal text-[30px] leading-[1.2] text-[#219653]'>
          {' '}
          Тестового товара для верстки
        </span>
      </h3>
      <ul className='mb-4 w-[313px]'>
        <li className='flex items-baseline font-medium text-[16px] leading-[1.9] text-[#33485d]'>
          <p>Тип</p>
          <span className='flex-grow border-b border-dotted border-[#dde8f0] mx-2' />
          <p>{type}</p>
        </li>
        <li className='flex items-baseline font-medium text-[16px] leading-[1.9] text-[#33485d]'>
          <p>Номер</p>
          <span className='flex-grow border-b border-dotted border-[#dde8f0] mx-2' />
          <p>{serialNumber}</p>
        </li>
        <li className='flex items-baseline font-medium text-[16px] leading-[1.9] text-[#33485d]'>
          <p>Бренд</p>
          <span className='flex-grow border-b border-dotted border-[#dde8f0] mx-2' />
          <p>{brand}</p>
        </li>
      </ul>
      <button
        type='button'
        className='flex items-center gap-3 font-medium text-[16px] leading-[1.2] text-[#33485d]'
      >
        Все Характеристики
        <svg className='w-1.5 h-[9px] fill-[#33485d]'>
          <use href='/svg/sprite.svg#Path-right' />
        </svg>
      </button>
    </div>
  );
};

export default ProductSpecifications;
