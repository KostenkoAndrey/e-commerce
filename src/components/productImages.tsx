'use client';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';

export interface ProductImagesProps {
  images: string[];
}

const ProductImages = ({ images }: ProductImagesProps) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const canScrollUp = startIndex > 0;
  const canScrollDown = startIndex + visibleCount < images.length;

  const handleScrollUp = () => {
    if (canScrollUp) setStartIndex(startIndex - 1);
  };

  const handleScrollDown = () => {
    if (canScrollDown) setStartIndex(startIndex + 1);
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  return (
    <div className='flex items-center gap-[10px] overflow-hidden w-[710px] flex-shrink-0'>
      <div className='flex flex-col items-center justify-between gap-5'>
        <button
          onClick={handleScrollUp}
          disabled={!canScrollUp}
          className={`${
            canScrollUp ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
          }`}
        >
          <svg className='w-7 h-3 fill-[#33485d]'>
            <use href='/svg/sprite.svg#Pict-path-up' />
          </svg>
        </button>
        <div className='flex flex-col gap-[10px] w-[120px]'>
          {visibleImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setMainImage(img)}
              className={`relative w-[120px] h-[120px] cursor-pointer ${
                img === mainImage
                  ? 'border-2 border-[#229754] rounded-[5px]'
                  : ''
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className='object-contain'
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleScrollDown}
          disabled={!canScrollDown}
          className={`${
            canScrollDown ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
          }`}
        >
          <svg className='w-7 h-3 fill-[#33485d]'>
            <use href='/svg/sprite.svg#Pict-path-down' />
          </svg>
        </button>
      </div>
      <div className='relative w-[580px] h-[580px] overflow-hidden'>
        <Image
          src={mainImage}
          alt='Main Product Image'
          fill
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ProductImages;
