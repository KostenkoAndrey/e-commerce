'use client';

import React, { useState } from 'react';
import StarRatingRender from '@/components/starRatingRender';
import SvgIcon from '@/components/svgIcon';

export interface Reviews {
  author: string;
  date: string;
  rating: number;
  content: string;
}

export interface ReviewsProps {
  reviewsCount: number;
  reviews: Reviews[];
}

const Reviews = ({ reviewsCount, reviews }: ReviewsProps) => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [load, setLoad] = useState(reviews.slice(0, visibleCount));

  const loadMoreReviews = () => {
    const newCount = visibleCount + 2;
    setVisibleCount(newCount);
    setLoad(reviews.slice(0, newCount));
  };

  const loadAllList = () => {
    setLoad(reviews);
  };

  const hasMore = load.length < reviews.length;

  return (
    <div
      className='grid col-start-7 md:col-end-13 xl:col-end-12 font-normal text-[0.625rem] lg:text-[0.875rem] xl:text-[1rem]
        leading-[1.2] pt-[10px] md:pt-0'
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-[1.875em] text-[#33485d]'>
          Отзывы покупателей <span className='font-medium text-[1em] text-[#219653]'>{reviewsCount}</span>
        </h3>

        {hasMore && (
          <button
            type='button'
            onClick={() => loadAllList()}
            aria-label='Open more Reviews'
            className='relative flex items-baseline gap-1.5 font-medium text-[1em] text-[#33485d] cursor-pointer hover:opacity-50 transition duration-700 ease-in-out
          after:absolute after:content-[""] after:left-1 after:-bottom-[4px] after:w-[5.125em] after:opacity-50  after:border after:border-[#5c6d7d]  '
          >
            Все отзывы
            <SvgIcon name={`Path-right`} style={`w-1.5 h-[9px] fill-[#33485d]`} />
          </button>
        )}
      </div>

      <ul>
        {load.map((review, index) => (
          <li key={index} className='py-8 border-t border-[#dde8f0] first:border-none'>
            <div className='flex gap-[18px] items-center'>
              <span className='text-[1em] font-medium text-[#33485d] leading-[2]'>
                {review.author}
                <span className='ml-1 font-normal text-[14px] text-[#5c6d7d]'>
                  {`/ ${new Date(review.date).toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}`}
                </span>
              </span>
              <StarRatingRender rating={review.rating} />
            </div>
            <p className='text-[1em] leading-[1.5] text-[#5c6d7d]'>{review.content}</p>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type='button'
          onClick={loadMoreReviews}
          className='block mt-10 mx-auto px-[30px] py-[14px] font-medium text-[0.875em] text-[#5c6d7d] border border-[#ffa800] rounded-tl-lg
          rounded-br-lg cursor-pointer hover:bg-[#e69500] hover:text-white hover:border-[#e69500] transition duration-700 ease-in-out'
        >
          Показать еще
        </button>
      )}
    </div>
  );
};

export default Reviews;
