import React from 'react';
import ProductInfoFAQ from '@/components/productInfoFAQ';
import ProductActions from '@/components/productActions';
import StarRatingRender from '@/components/starRatingRender';

export interface ProductPurchasePanelProps {
  article: string;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  price: number;
  oldPrice: number;
}

const ProductPurchasePanel = ({
  article,
  inStock,
  rating,
  reviewsCount,
  price,
  oldPrice,
}: ProductPurchasePanelProps) => {
  return (
    <div className='pt-[10px] flex flex-col gap-[26px] w-[589px]'>
      <div className='flex items-center gap-5 w-full'>
        <p
          className={`flex gap-3 font-medium text-[16px] leading-[1.2] ${inStock ? 'text-[#249755]' : 'text-[#eb5757]'} `}
        >
          <svg
            className={`w-5 h-5 ${inStock ? 'fill-[#219653]' : 'fill-[#eb5757]'}`}
          >
            <use href={`/svg/sprite.svg#${inStock ? 'Check' : 'Cross'}`} />
          </svg>
          {inStock ? 'В наличии' : 'Нет в наличии'}
        </p>

        <p className='flex gap-1 items-center mr-auto '>
          <StarRatingRender rating={rating} />
          <span
            className='relative font-medium text-[14px] leading-[1.2] text-[#33485d] ml-1
        after:content-[""] after:absolute after:-bottom-1 after:left-0
        after:border-b after:border-[#5c6d7d] after:w-full'
          >
            {reviewsCount}
          </span>
        </p>

        <p className='font-medium text-[14px] leading-[1.2] text-[#5c6d7d]'>
          Артикул:{' '}
          <span className='font-medium text-[14px] leading-[1.2] text-[#33485d]'>
            {article}
          </span>
        </p>
      </div>
      <div>
        <div className='flex h-[60px]'>
          <h3 className='flex items-center px-4 font-bold text-[24px] leading-[1.2] text-white bg-[#eb5757] rounded-tl-lg'>
            Акция
          </h3>
          <p className='flex items-center px-4 font-normal text-[16px] leading-[1.2] text-[#eb5757] bg-[#fdeeee] rounded-tr-lg w-full h-full'>
            До 30 июля скидка — 20% на все тестовые товары
          </p>
        </div>
        <div className='px-5 pb-5 pt-[36px] flex items-baseline gap-6 border-x border-x-[#dde8f0]'>
          <span className='font-bold text-[36px] leading-[1.2] text-[#eb5757]'>
            {`${price.toLocaleString('ru-RU')} ₴`}
          </span>
          <span className='relative inline-block font-medium text-[16px] leading-[1.2] text-[#33485d]'>
            <span className='opacity-50'>
              {' '}
              {`${oldPrice.toLocaleString('ru-RU')} ₴`}
            </span>
            <span className='pointer-events-none absolute left-0 top-1/2 w-full h-[2px] bg-[#eb5757] -translate-y-1/2 opacity-100'></span>
          </span>
        </div>
        <div className='flex justify-between h-[60px] '>
          <button
            type='button'
            className='px-5 py-[15px] flex gap-10 items-center bg-[#219653] rounded-bl-lg
             font-medium text-[24px] leading-[1.2] text-white'
          >
            В корзину
            <svg className='w-[30px] h-[30px] fill-white'>
              <use href='/svg/sprite.svg#Basket' />
            </svg>
          </button>

          <ProductActions />
          <div className='flex gap-3 items-center px-5 py-2 border-2 border-[#ffcb6d] rounded-br-lg w-[169px]'>
            <svg className='w-[30px] h-[30px] fill-[#33485d]'>
              <use href='/svg/sprite.svg#Call' />
            </svg>
            <span className='font-medium text-[14px] leading-[1.2] text-[#5c6d7d]'>
              Купить в один клик
            </span>
          </div>
        </div>
      </div>
      <ProductInfoFAQ />
    </div>
  );
};

export default ProductPurchasePanel;
