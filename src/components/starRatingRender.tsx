import React from 'react';

export interface StarRatingRenderProps {
  rating: number;
}

const StarRatingRender = ({ rating }: StarRatingRenderProps) => {
  return (
    <span className='flex gap-1 items-center'>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-[14px] h-[14px] fill-[#ffa800] ${i < rating ? '' : 'opacity-50'}`}
        >
          <use href='/svg/sprite.svg#Star' />
        </svg>
      ))}
    </span>
  );
};

export default StarRatingRender;
