import React from 'react';
import ProductInfoFAQ from '@/components/productInfoFAQ';
import ProductActions from '@/components/productActions';
import StarRatingRender from '@/components/starRatingRender';
import ButtonForOrder from '@/components/buttonForOrder';
import SvgIcon from '@/components/svgIcon';

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
    <div
      className='grid col-span-1 col-start-7 md:col-end-13 xl:col-end-12 pt-[20px] pb-[10px] md:py-0 text-[0.75rem] xl:text-[1rem]
        font-medium leading-[1.2] min-h-[200px] min-w-[355px]'
    >
      <div className='flex items-center gap-5 py-2 xl:p-0'>
        <div className={`flex items-center gap-3  text-[1em] ${inStock ? 'text-[#249755]' : 'text-[#eb5757]'} `}>
          <SvgIcon
            name={`${inStock ? 'Check' : 'Cross'}`}
            style={`w-5 h-5 min-w-[20px] min-h-[20px] ${inStock ? 'fill-[#219653]' : 'fill-[#eb5757]'}`}
          />
          <span>{inStock ? 'В наличии' : 'Нет в наличии'}</span>
        </div>

        <div className='flex flex-grow gap-1 items-center min-h-[14px]'>
          <StarRatingRender rating={rating} />
          <span
            className='relative text-[0.875em] text-[#33485d] ml-1
        after:content-[""] after:absolute after:-bottom-1 after:left-0
        after:border-b after:border-[#5c6d7d] after:w-full'
          >
            {reviewsCount}
          </span>
        </div>

        <div className='text-[0.875em] text-[#5c6d7d]'>
          <span>Артикул:</span>
          <span className='text-[#33485d]'>{article}</span>
        </div>
      </div>

      <div className='pb-4'>
        <div className='flex h-[60px]'>
          <h3 className='flex items-center px-4 font-bold text-[1.25em] md:text-[1.5em] text-white bg-[#eb5757] rounded-tl-lg'>
            Акция
          </h3>
          <span className='flex items-center px-4 font-normal text-[1em] text-[#eb5757] bg-[#fdeeee] rounded-tr-lg w-full h-full'>
            До 30 июля скидка — 20% на все тестовые товары
          </span>
        </div>

        <div className='px-5 py-5 sm:pt-[36px] flex items-baseline gap-6 border-x border-x-[#dde8f0]'>
          <span className='font-bold text-[2.25em]  text-[#eb5757]'>{`${price.toLocaleString('ru-RU')}\u00A0₴`}</span>
          <span className='relative inline-block font-medium text-[1em] text-[#33485d]'>
            <span className='opacity-50'> {`${oldPrice.toLocaleString('ru-RU')}\u00A0₴`}</span>
            <span className='pointer-events-none absolute left-0 top-1/2 w-full h-[2px] bg-[#eb5757] -translate-y-1/2 opacity-100'></span>
          </span>
        </div>

        <div className='flex justify-between lg:gap-2'>
          <ButtonForOrder
            style='flex-grow flex items-center justify-center lg:justify-between bg-[#219653] text-white rounded-b-lg
            lg:rounded-br-none py-2 px-7 xl:px-3 text-[1.75em] xl:text-[1.25em] w-full xl:max-w-[223px] gap-1'
          >
            В корзину
            <SvgIcon name={'Basket'} style={'w-[30px] h-[30px] fill-white'} />
          </ButtonForOrder>
          <ProductActions hasPhoneCard={true} />
        </div>
      </div>
      <ProductInfoFAQ />
    </div>
  );
};

export default ProductPurchasePanel;
