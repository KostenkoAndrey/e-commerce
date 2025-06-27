'use client';

import React, { useRef, useState } from 'react';
import SvgIcon from '@/components/svgIcon';
import BasketModal from '@/components/basketModal';

export interface ProductActionsProps {
  hasBasketCard?: boolean;
  hasPhoneCard?: boolean;
  productQuantity?: number;
}

const ProductActions = ({ hasBasketCard, hasPhoneCard, productQuantity }: ProductActionsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [like, setLike] = useState(false);
  const [balance, setBalance] = useState(false);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };
  return (
    <div className='flex gap-2 text-[1rem]'>
      <div className={`hidden lg:flex border-[2px] border-[#ffcb6d] border-solid ${hasBasketCard && 'rounded-tr-lg'}`}>
        <div
          onClick={() => setBalance(!balance)}
          className='py-[13px] px-7 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition duration-700 ease-in-out'
        >
          <button type='button' className='cursor-pointer'>
            <SvgIcon
              name={'Balance'}
              aria-label='Balance'
              style={`w-[30px] h-[30px] fill-[#33485d] group-hover:fill-red-500 ${balance && 'fill-red-500'} `}
            />
          </button>
        </div>

        <div
          onClick={() => setLike(!like)}
          className='py-[13px] px-7 flex items-center justify-center border-l-[#ffcb6d] border-l-[2px] cursor-pointer
          hover:bg-gray-200 transition duration-700 ease-in-out'
        >
          <button type='button' aria-label='Like' className='cursor-pointer'>
            <SvgIcon name={'Like'} style={`w-[30px] h-[30px] fill-current text-[#33485d] ${like && 'text-red-500'} `} />
          </button>
        </div>

        {hasBasketCard && (
          <div
            className='group relative py-[13px] px-7 flex items-center justify-center
        border-l-[#ffcb6d] border-l-[2px] rounded-tr-[6px] hover:bg-[#47b39c] cursor-pointer transition duration-700 ease-in-out'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <SvgIcon
              name={'Basket'}
              style={
                'w-[30px] h-[30px] fill-current text-[#33485d] group-hover:text-[#fff] transition duration-700 ease-in-out'
              }
            />

            <span
              className='absolute flex justify-center items-center bg-[#ffbe48] w-[30px] h-5 rounded-[18px]
            font-bold text-[#33485d] text-[14px] leading-[1.2] tracking-wider uppercase  top-1.5
            right-1.5 group-hover:bg-white duration-700 ease-in-out'
            >
              {productQuantity}
            </span>

            {isHovered && <BasketModal productQuantity={productQuantity} />}
          </div>
        )}
      </div>
      {hasPhoneCard && (
        <div
          className='hidden h-[60px] lg:flex items-center gap-3 lg:py-[13px] lg:px-7 xl:px-5 xl:py-3 border-2
        border-[#ffcb6d] rounded-br-lg max-w-[167px] cursor-pointer hover:bg-gray-200 transition duration-500 ease-in-out'
        >
          <SvgIcon name={'Call'} style={'w-[30px] h-[30px] fill-[#33485d]'} />
          <span className='hidden xl:inline font-medium lg:text-[0.875em] xl:text-[0.875em] leading-[1.2] text-[#5c6d7d]'>
            Купить в один клик
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductActions;
