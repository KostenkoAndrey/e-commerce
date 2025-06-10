import React from 'react';
import StarRatingRender from '@/components/starRatingRender';
import Image from 'next/image';

export interface Promo {
  id: number;
  title: string;
  group: string;
  price: number;
  rating: number;
  reviewsCount: number;
  badge: string | null;
  inStock: boolean;
  image: string;
}

export interface PromoItemProps {
  item: Promo;
}

const PromoItem = ({ item }: PromoItemProps) => {
  return (
    <div className='px-[8px] pt-3 pb-10 border-2 border-[#239653] rounded-lg'>
      {item.badge ? (
        <span
          className={`absolute w-[90px] h-[30px] px-5 font-medium text-[18px] text-white ${item.badge === 'top' ? 'bg-[#2d9cdb]' : 'bg-[#bb6bd9]'} 
        top-0 left-0 rounded-tl-lg rounded-br-lg z-10`}
        >
          {item.badge}
        </span>
      ) : null}
      <button
        type='button'
        className='absolute top-3 right-3 cursor-pointer z-10'
      >
        <svg className='w-[30px] h-[30px] fill-[#33485d]'>
          <use href='/svg/sprite.svg#Like' />
        </svg>
      </button>
      <div className='relative w-[255px] h-[255px] mb-2.5'>
        <Image
          src={item.image}
          alt={`spare parts ${item.group}`}
          fill
          className='object-contain w-full'
        />
      </div>
      <div className='flex gap-2 justify-start mb-2 px-2.5'>
        <StarRatingRender rating={item.rating} />
        <span className='font-medium text-[14px] leading-[1.2] text-[#33485d]'>
          {item.reviewsCount}
        </span>
      </div>

      <div className='h-[87px] px-2.5 mb-1 relative overflow-hidden z-10'>
        <p className='font-medium text-[14px] leading-[1.7] text-[#219653] mb-2'>
          {item.group}
        </p>
        <p className='font-normal text-[18px] text-[#33485d]'>{item.title}</p>
        <div
          className='absolute bottom-0 left-0 w-full h-6 pointer-events-none'
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 68.75%)',
          }}
        />
      </div>

      <div className='px-2.5 flex justify-between'>
        <p>{`${item.price.toLocaleString('ru-RU')} ₴`}</p>
        <p
          className={`flex gap-2 font-medium text-[16px] leading-[1.2] ${item.inStock ? 'text-[#249755]' : 'text-[#eb5757]'} `}
        >
          <svg
            className={`w-5 h-5 ${item.inStock ? 'fill-[#219653]' : 'fill-[#eb5757]'}`}
          >
            <use href={`/svg/sprite.svg#${item.inStock ? 'Check' : 'Cross'}`} />
          </svg>
          {item.inStock ? 'В наличии' : 'Нет в наличии'}
        </p>
      </div>
    </div>
  );
};

export default PromoItem;
