import React, { useState } from 'react';
import SvgIcon from '@/components/svgIcon';
import SearchBox from '@/components/searchBox';
import CatalogItem from '@/components/catalogItem';
import Login from '@/components/login';

export interface MobileMenuProps {}

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

const MobileMenu = ({}: MobileMenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [like, setLike] = useState(false);
  const [balance, setBalance] = useState(false);

  return (
    <div className='relative lg:hidden flex items-center gap-2 w-full'>
      <button
        type='button'
        aria-label='mobile-menu'
        onClick={() => setOpenMenu(!openMenu)}
        className='flex justify-center items-center cursor-pointer'
      >
        <SvgIcon name={'icon-menu'} style={'w-10 h-10  text-[#34495e] fill-current'} />
      </button>

      <SvgIcon name={'WezomLogo'} style={'w-10 h-10 fill-[#34495e]'} />

      <SearchBox />

      <Login style='md:hidden'>
        <SvgIcon name={'User'} style={'w-10 h-10 text-[#ffbe48] fill-current'} />
      </Login>

      {openMenu ? <CatalogItem setOpenMenu={setOpenMenu} categories={categories} /> : ''}

      <div className='fixed z-10 md:hidden left-0 bottom-0 w-full flex justify-between items-center shadow-[0_4px_20px_0_rgba(0,0,0,0.25)]'>
        <button
          type='button'
          aria-label='Balance-button'
          onClick={() => setBalance(!balance)}
          className='cursor-pointer p-[10px]'
        >
          <SvgIcon name={'Balance'} style={`w-10 h-10 fill-[#ffbe48] ${balance && 'fill-red-500'}`} />
        </button>
        <button
          type='button'
          aria-label='Like-button'
          onClick={() => setLike(!like)}
          className='cursor-pointer p-[10px]'
        >
          <SvgIcon name={'Like'} style={`w-10 h-10 text-[#ffbe48] ${like && 'text-red-500'}`} />
        </button>
        <button type='button' aria-label='Basket-button' className='cursor-pointer p-[10px]'>
          <SvgIcon name={'Basket'} style={'w-10 h-10 text-[#ffbe48]'} />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
