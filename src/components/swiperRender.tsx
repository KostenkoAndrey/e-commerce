import React, { useEffect } from 'react';
import PromoItem from '@/components/promoItem';
import { Promo } from '@/components/api';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export interface SwiperProps {
  item: Promo[];
}

const SwiperRender = ({ item }: SwiperProps) => {
  useEffect(() => {
    const swiper = new Swiper('.product-swiper', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 16,
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <div className='product-swiper swiper xl:!hidden w-[276px] sm:w-[568px] lg:w-[860px] mx-auto'>
      <div className='swiper-wrapper pt-[15px] pb-10'>
        {item.map((item, index) => (
          <div key={index} className='swiper-slide'>
            <PromoItem item={item} />
          </div>
        ))}
      </div>
      {/*// <!-- If we need pagination -->*/}
      <div className='swiper-pagination'></div>

      {/*// <!-- If we need navigation buttons -->*/}
      <div className='swiper-button-prev'></div>
      <div className='swiper-button-next'></div>

      {/*// <!-- If we need scrollbar -->*/}
    </div>
  );
};

export default SwiperRender;
