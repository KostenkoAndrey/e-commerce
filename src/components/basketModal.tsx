import React from 'react';
import ButtonForOrder from '@/components/buttonForOrder';
import SvgIcon from '@/components/svgIcon';

export interface BasketModalProps {
  productQuantity?: number;
}

const BasketModal = ({ productQuantity }: BasketModalProps) => {
  return (
    <div
      className='absolute z-50 p-[30px] -right-[7px] top-full
              translate-y-[19px] shadow-[0_10px_80px_0_rgba(0,52,41,0.3)] rounded-lg bg-white'
    >
      <div className='flex flex-col mb-10'>
        <span className='font-normal text-[18px] text-[#5c6d7d]'>
          В корзине
          <span className='font-bold text-[18px] text-[#33485d]'>{` ${productQuantity} товара`}</span>
        </span>
        <span className='font-normal text-[18px] text-[#5c6d7d]'>
          На сумму
          <span className='font-bold text-[18px] text-[#33485d]'>{` 30 000 ₴`}</span>
        </span>
      </div>

      <ButtonForOrder
        style={
          'flex item-center gap-4 py-4 px-5 bg-[#47b39c] w-[277px] font-medium text-[24px] leading-[1.2] text-white rounded-tl-lg rounded-br-lg mb-[30px]'
        }
      >
        Оформить Заказ
        <SvgIcon name={'Basket'} style={'w-[30px] h-[30px] text-white'} />
      </ButtonForOrder>

      <button
        type='button'
        className='inline-block font-medium text-[18px] leading-[1.2] text-[#33485d] border-b-[1px] border-[#5c6d7d]
              border-opacity-50 cursor-pointer bg-transparent hover:opacity-80 transition duration-700 ease-in-out'
      >
        Редактировать заказ
      </button>
    </div>
  );
};

export default BasketModal;
