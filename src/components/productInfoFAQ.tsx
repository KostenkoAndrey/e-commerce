import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SvgIcon from '@/components/svgIcon';

export interface ProductInfoFAQProps {}

const ProductInfoFAQ = ({}: ProductInfoFAQProps) => {
  return (
    <Accordion type='single' collapsible className='w-full lg:text-[2rem] xl:text-[2rem]'>
      <AccordionItem value='warranty' className='border-t border-[#dbe3ea]'>
        <AccordionTrigger>
          <div className='flex items-end justify-between gap-2 px-2 py-3 lg:text-[0.875rem] xl:text-[1rem]'>
            <SvgIcon name={'Warranty'} style={'w-5 h-5 fill-[#219653]'} />
            <span className='font-bold text-[1em] leading-[1.2] text-[#5c6d7d]'>Гарантия</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <span className='font-bold text-[1em] leading-[1.2] text-[#5c6d7d]'>
            Мы предоставляем гарантию на 12 месяцев от даты покупки.
          </span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='delivery'>
        <AccordionTrigger>
          <div className='flex items-end justify-between gap-2 px-2 py-3 lg:text-[0.875rem] xl:text-[1rem]'>
            <SvgIcon name={'DeliveryCondition'} style={'w-5 h-5 fill-[#219653]'} />
            <span className='font-bold text-[1em] leading-[1.2] text-[#5c6d7d]'>Условия доставки</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <span className='font-bold text-[1em] leading-[1.2] text-[#5c6d7d]'>
            Доставка осуществляется по всей России в течение 1–3 дней.
          </span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='payment'>
        <AccordionTrigger>
          <div className='flex items-end justify-between gap-2 px-2 py-3 lg:text-[0.875rem] xl:text-[1rem]'>
            <SvgIcon name={'PaymentCondition'} style={'w-5 h-5 fill-[#219653]'} />
            <span className='font-bold text-[1em] leading-[1.2] text-[#5c6d7d] hover:no-underline focus:no-underline'>
              Условия оплаты
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <span className='font-bold text-[1em] leading-[1.2] text-[#5c6d7d]'>
            Мы принимаем карты, СБП и оплату при получении.
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductInfoFAQ;
