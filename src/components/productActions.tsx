import React, { useRef, useState } from 'react';
import Image from 'next/image';

export interface ProductActionsProps {
  hasBasketCard?: boolean;
  hasCallCard?: boolean;
  productQuantity?: number;
}

const ProductActions = ({
  hasBasketCard,
  productQuantity,
}: ProductActionsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <ul
      className={`flex border-[2px] border-[#ffcb6d] border-solid ${hasBasketCard && 'rounded-tr-lg'}`}
    >
      <li className='py-[15px] px-7 flex items-center justify-center'>
        <svg className='w-[30px] h-[30px] fill-[#33485d]'>
          <use href='/svg/sprite.svg#Balance' />
        </svg>
      </li>
      <li className='py-[15px] px-7 flex items-center justify-center border-l-[#ffcb6d] border-l-[2px]'>
        <svg className='w-[30px] h-[30px] fill-[#33485d]'>
          <use href='/svg/sprite.svg#Like' />
        </svg>
      </li>
      {hasBasketCard && (
        <li
          className='group relative py-[13px] px-7 flex items-center justify-center
          border-l-[#ffcb6d] border-l-[2px] rounded-tr-[6px] hover:bg-[#47b39c] cursor-pointer'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg className='w-[30px] h-[30px] fill-current text-[#33485d] group-hover:text-[#fff]'>
            <use href='/svg/sprite.svg#Basket' />
          </svg>
          <span
            className='flex justify-center items-center bg-[#ffbe48] w-[30px] h-5 rounded-[18px]
                  font-bold text-[#33485d] text-[14px] leading-[1.2] tracking-wider uppercase absolute top-1.5
                  right-1.5 group-hover:bg-white'
          >
            {productQuantity}
          </span>
          {isHovered && (
            <div
              className='absolute z-50 w-[338px] h-[280px] pt-[48px] pb-[30px] px-[30px] -right-[7px] top-full
                    translate-y-[19px] shadow-[0_10px_80px_0_rgba(0,52,41,0.3)] rounded-lg bg-white'
            >
              <div className='flex flex-col mb-10'>
                <p className='font-normal text-[18px] text-[#5c6d7d]'>
                  В корзине
                  <span className='font-bold text-[18px] text-[#33485d]'>
                    {` ${productQuantity} товара`}
                  </span>
                </p>
                <p className='font-normal text-[18px] text-[#5c6d7d]'>
                  На сумму
                  <span className='font-bold text-[18px] text-[#33485d]'>
                    {` 30 000 ₴`}
                  </span>
                </p>
                <div className='absolute top-0 left-0'>
                  <Image
                    src='/images/Rectangle.png'
                    alt='Rectangle background'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <button
                type='button'
                className='flex items-center gap-4 rounded-tl-lg rounded-br-lg mb-[30px] bg-[#47b39c] py-[15px] px-5 font-medium text-[24px] text-white leading-[1.2] cursor-pointer'
              >
                Оформить заказ
                <svg className='w-[30px] h-[30px] text-white'>
                  <use href='/svg/sprite.svg#Basket' />
                </svg>
              </button>
              <button
                type='button'
                className='inline-block font-medium text-[18px] leading-[1.2] text-[#33485d] border-b-[1px] border-[#5c6d7d] border-opacity-50 cursor-pointer bg-transparent'
              >
                Редактировать заказ
              </button>
            </div>
          )}
        </li>
      )}
    </ul>
  );
};

export default ProductActions;
