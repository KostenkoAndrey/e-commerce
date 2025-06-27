'use client';

import { useState } from 'react';
import React from 'react';
import SvgIcon from '@/components/svgIcon';
import MobileImageSlider from '@/components/mobileImageSlider';

import { motion, AnimatePresence } from 'framer-motion';

interface ProductImageProps {
  small: string;
  large: string;
}

export interface ProductImagesProps {
  images: ProductImageProps[];
}

const ProductImages = ({ images }: ProductImagesProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);
  const visibleCount = 4;

  const maxStartIndex = Math.max(0, images.length - visibleCount);
  const canScrollUp = startIndex > 0;
  const canScrollDown = startIndex < maxStartIndex;

  const handleScrollUp = () => {
    if (startIndex > 0) {
      const newStart = startIndex - 1;
      setStartIndex(newStart);
    }
  };

  const handleScrollDown = () => {
    if (startIndex < maxStartIndex) {
      const newStart = startIndex + 1;
      setStartIndex(newStart);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  return (
    <>
      <div className='hidden lg:grid lg:grid-cols-[70px_1fr] xl:grid-cols-[120px_1fr] col-start-1 col-end-7 gap-4 overflow-hidden'>
        <div className='flex flex-col items-center justify-between lg:gap-4 xl:gap-5 max-h-[400px] xl:max-h-[580px]'>
          <button
            onClick={handleScrollUp}
            disabled={!canScrollUp}
            aria-label='Scroll-Up'
            className={`${startIndex > 0 ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}`}
          >
            <SvgIcon name={'Pict-path-up'} style={'w-7 h-3 fill-[#33485d]'} />
          </button>

          <div className='flex flex-col xl:gap-[10px] lg:gap-4'>
            <AnimatePresence mode='popLayout'>
              {visibleImages.map((img) => (
                <motion.div
                  key={img.small}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setMainImage(img)}
                  className={`overflow-hidden cursor-pointer ${
                    img === mainImage ? 'border-2 border-[#229754] rounded-[5px]' : ''
                  }`}
                >
                  <picture>
                    <source srcSet={`${img.small} 1x, ${img.large} 2x`} type='image/jpeg' />
                    <img src={img.small} alt='Фото' width='120' height='120' />
                  </picture>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button
            onClick={handleScrollDown}
            disabled={!canScrollDown}
            aria-label='Scroll-Down'
            className={`${startIndex < maxStartIndex ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}`}
          >
            <SvgIcon name={'Pict-path-down'} style={'w-7 h-3 fill-[#33485d]'} />
          </button>
        </div>
        <div className='overflow-hidden max-w-[580px] max-h-[580px]'>
          <picture className='block w-full h-full'>
            <source srcSet={`${mainImage.small} 1x, ${mainImage.large} 2x`} type='image/jpeg' />
            <motion.img
              key={mainImage.small}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='object-contain w-full h-auto max-h-[400px] xl:max-h-[580px]'
              src={mainImage.small}
              alt='Фото'
              width='580'
              height='580'
            />
          </picture>
        </div>
      </div>
      <MobileImageSlider images={images} />
    </>
  );
};

export default ProductImages;
