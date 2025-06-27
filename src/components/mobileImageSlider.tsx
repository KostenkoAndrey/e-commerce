'use client';

import React, { useEffect } from 'react';

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

Swiper.use([Navigation, Pagination, Scrollbar]);

export interface MobileImageSlider {
  small: string;
  large: string;
}

export interface ProductImagesProps {
  images: MobileImageSlider[];
}

const MobileImageSlider = ({ images }: ProductImagesProps) => {
  useEffect(() => {
    const swiper = new Swiper('.gallery-swiper', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 16,
      slidesPerView: 1,
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
    <div className='gallery-swiper swiper lg:!hidden md:max-w-[360px] md:col-start-1 md:col-end-7'>
      <div className='swiper-wrapper mx-auto'>
        {images.map((img, i) => (
          <div key={i} className='swiper-slide overflow-hidden'>
            <picture className='block w-full h-full'>
              <source srcSet={`${img.small} 1x, ${img.large} 2x`} type='image/jpeg' />
              <img
                className='object-contain w-full h-auto max-h-[400px] xl:max-h-[580px]'
                width='580'
                height='580'
                src={img.small}
                alt='Фото'
              />
            </picture>
          </div>
        ))}
      </div>
      <div className='swiper-pagination'></div>
      <div className='swiper-button-prev'></div>
      <div className='swiper-button-next'></div>
    </div>
  );
};

export default MobileImageSlider;
