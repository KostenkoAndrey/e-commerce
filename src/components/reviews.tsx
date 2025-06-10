import React, { useState } from 'react';
import StarRatingRender from '@/components/starRatingRender';

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
    <div className='w-[589px]'>
      <div className='flex justify-between items-center'>
        <h3 className='font-normal text-[30px] leading-[1.2] text-[#33485d]'>
          Отзывы покупателей{' '}
          <span className='font-medium text-[30px] leading-[1.2] text-[#219653]'>
            {reviewsCount}
          </span>
        </h3>

        <button
          type='button'
          onClick={() => loadAllList()}
          className='relative flex items-baseline gap-1.5 font-medium text-[16px] leading-[1.2] text-[#33485d]
          after:absolute after:content-[""] after:left-1 after:-bottom-[4px] after:w-[83px] after:opacity-50  after:border after:border-[#5c6d7d]  '
        >
          Все отзывы
          <svg className='w-1.5 h-[9px] fill-[#33485d]'>
            <use href='/svg/sprite.svg#Path-right' />
          </svg>
        </button>
      </div>

      <ul>
        {load.map((review, index) => (
          <li
            key={index}
            className='py-8 border-t border-[#dde8f0] first:border-none'
          >
            <div className='flex gap-[18px] items-center'>
              <p className='text-[16px] font-medium text-[#33485d] leading-[2]'>
                {review.author}
                <span className='ml-1 font-normal text-[14px] text-[#5c6d7d]'>
                  {`/ ${new Date(review.date).toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}`}
                </span>
              </p>
              <StarRatingRender rating={review.rating} />
            </div>
            <p className='font-normal text-[16px] leading-[1.5] text-[#5c6d7d]'>
              {review.content}
            </p>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type='button'
          onClick={loadMoreReviews}
          className='block mt-10 mx-auto px-[30px] py-[14px] font-medium text-[13px] leading-[1.2] text-[#5c6d7d]
          border border-[#ffa800] rounded-tl-lg rounded-br-lg cursor-pointer'
        >
          Показать еще
        </button>
      )}
    </div>
  );
};

export default Reviews;
