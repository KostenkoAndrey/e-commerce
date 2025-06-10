import React, { useState, useRef, useEffect } from 'react';

export interface CatalogProps {}

const categories = [
  'Категория 1',
  'Категория 2',
  'Категория 3',
  'Категория 4',
  'Категория 5',
  'Категория 6',
  'Категория 7',
  'Категория 8',
  'Категория 9',
  'Категория 10',
];

const Catalog = ({}: CatalogProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className='relative flex gap-[80px] items-center justify-between px-5 py-[18px] bg-[#ffbe48] rounded-tl-lg w-[371px]'
    >
      <span className='flex gap-5 items-center font-medium text-2xl leading-[1.2px] tracking-wider text-white'>
        <svg className='w-[28px] h-[24px] stroke-[#fff]'>
          <use href='/svg/sprite.svg#Burger' />
        </svg>
        Каталог
      </span>
      <button
        type='button'
        onClick={(e: React.MouseEvent<HTMLSpanElement>) => setOpen(!open)}
        className='relative font-normal text-[14px] leading-[1.7] text-white after:content-[""]
      after:absolute after:left-0 after:bottom-0 after:w-[100%] after:h-[1px] after:bg-white after:opacity-50
      cursor-pointer'
      >
        Все категории
      </button>
      {open ? (
        <ul className='rounded-b-[10px] z-10 px-2 py-2 absolute top-full left-0 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] bg-white w-[100%] flex flex-col gap-[6px]'>
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                className='flex justify-between items-center p-2 cursor-pointer'
              >
                <div className='flex gap-4 items-center'>
                  <svg className='w-[34px] h-[34px]'>
                    <use href={`/svg/sprite.svg#icon-${index + 1}`} />
                  </svg>
                  <p className='font-medium text-[18px] leading-[3.9px] text-[#5c6d7d]'>
                    {category}
                  </p>
                </div>
                <svg className='h-4 w-[10px]'>
                  <use href='/svg/sprite.svg#Path' />
                </svg>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Catalog;
