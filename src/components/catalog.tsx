'use client';

import React, { useState } from 'react';
import CatalogItem from '@/components/catalogItem';
import SvgIcon from '@/components/svgIcon';

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
  return (
    <div className='relative flex items-center justify-between px-5 py-[18px] bg-[#ffbe48] rounded-tl-lg text-[1rem] leading-[1.2]'>
      <div className='flex gap-5 items-center font-medium text-[1.5em] tracking-wider text-white'>
        <SvgIcon name={'Burger'} style={'w-7 h-6 stroke-[#fff]'} />
        <span> Каталог</span>
      </div>
      <button
        type='button'
        onClick={() => setOpen(!open)}
        className='relative font-normal text-[0.875em] leading-[1.7] text-white hover:text-[#33485d] after:content-[""]
      after:absolute after:left-0 after:bottom-0 after:w-[100%] after:h-[1px] after:bg-white after:opacity-50
      after:hover:bg-[#33485d] transition duration-700 after:transition after:ease-in-out cursor-pointer'
      >
        <span>Все категории</span>
      </button>
      {open ? <CatalogItem setOpenMenu={setOpen} categories={categories} /> : ''}
    </div>
  );
};

export default Catalog;
