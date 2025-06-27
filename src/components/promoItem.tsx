'use client';

import React, { useState } from 'react';
import StarRatingRender from '@/components/starRatingRender';
import SvgIcon from '@/components/svgIcon';

export interface Promo {
  id: number;
  title: string;
  group: string;
  price: number;
  rating: number;
  reviewsCount: number;
  badge: string | null;
  inStock: boolean;
  image: {
    small: string;
    large: string;
  };
}

export interface PromoItemProps {
  item: Promo;
}

const PromoItem = ({ item }: PromoItemProps) => {
  const [like, setLike] = useState(false);

  return (
    <div className='px-[8px] pt-3 pb-10 border-2 border-[#239653] rounded-lg text-[1rem] leading-[1.2] font-medium text-[#33485d]'>
      {item.badge && (
        <span
          className={`absolute w-[90px] h-[30px] px-5 text-[1.125em] text-white ${item.badge === 'top' ? 'bg-[#2d9cdb]' : 'bg-[#bb6bd9]'} 
        top-0 left-0 rounded-tl-lg rounded-br-lg z-10`}
        >
          {item.badge}
        </span>
      )}
      <button
        type='button'
        aria-label='Set Like'
        onClick={() => setLike(!like)}
        className='absolute top-3 right-3 cursor-pointer z-10'
      >
        <SvgIcon name={'Like'} style={`w-[30px] h-[30px] fill-[#33485d] ${like && 'text-red-500'}`} />
      </button>

      <div className='mb-2 max-w-[255px]'>
        <picture>
          <source srcSet={`${item.image.small} 1x, ${item.image.large} 2x`} type='image/jpeg' />
          <img className='object-contain w-[255px] h-[255px]' src={item.image.small} alt='Фото' loading='lazy' />
        </picture>
      </div>

      <div className='flex gap-2 justify-start mb-2 px-2.5'>
        <StarRatingRender rating={item.rating} />
        <span className=' text-[0.875em]'>{item.reviewsCount}</span>
      </div>

      <div className='flex flex-col gap-2 h-[87px] px-2.5 relative overflow-hidden z-10 mb-4'>
        <span className=' text-[0.875em] leading-[1.7] text-[#219653]'>{item.group}</span>
        <span className='font-normal text-[1.125em]'>{item.title}</span>
        <div
          className='absolute -bottom-[6px] left-0 w-full h-4 pointer-events-none'
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 68.75%)',
          }}
        />
      </div>

      <div className='px-2.5 flex justify-between'>
        <span>{`${item.price.toLocaleString('ru-RU')}\u00A0₴`}</span>
        <span className={`flex gap-2 text-[1em] ${item.inStock ? 'text-[#249755]' : 'text-[#eb5757]'} `}>
          <SvgIcon
            name={`${item.inStock ? 'Check' : 'Cross'}`}
            style={`w-5 h-5 ${item.inStock ? 'fill-[#219653]' : 'fill-[#eb5757]'}`}
          />
          {item.inStock ? 'В наличии' : 'Нет в наличии'}
        </span>
      </div>
    </div>
  );
};

export default PromoItem;
