import React from 'react';

export interface SerchbarProps {}

const SearchBox = ({}: SerchbarProps) => {
  return (
    <div className='relative w-full'>
      <input
        type='text'
        placeholder='Search, for example Test'
        className='w-full px-4 py-[14px] rounded-[10px] bg-[#dde8f0] placeholder-[#33485d] placeholder:text-[16px] placeholder:leading-[1.2px]
        placeholder:font-normal placeholder:opacity-70'
      />
      <button type='button'>
        <svg className='w-[18px] h-[18px] stroke-[#33485d] absolute top-1/2 -translate-y-1/2 right-4'>
          <use href='/svg/sprite.svg#Magnifier' />
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;
