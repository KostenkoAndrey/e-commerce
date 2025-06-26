import React from 'react';
import SvgIcon from '@/components/svgIcon';

export interface StarRatingRenderProps {
  rating: number;
}

const StarRatingRender = ({ rating }: StarRatingRenderProps) => {
  return (
    <span className='flex gap-1 items-center'>
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          <SvgIcon key={i} name={'Star'} style={`w-[14px] h-[14px] fill-[#ffa800] ${i < rating ? '' : 'opacity-50'}`} />
        </span>
      ))}
    </span>
  );
};

export default StarRatingRender;
