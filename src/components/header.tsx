import React from 'react';
import Link from 'next/link';
import LanguageSwitcher from '@/components/languageSwitcher';
import Login from '@/components/login';
import Catalog from '@/components/catalog';
import SearchBox from '@/components/searchBox';
import ProductActions from '@/components/productActions';

export interface HeaderProps {}

const productQuantity = 13;

const Header = () => {
  return (
    <header className='flex justify-between items-center gap-4 max-w-[1520px] px-10 py-5 mx-auto'>
      <div className='flex flex-col gap-4'>
        <svg className='w-[114px] h-[41px] fill-black'>
          <use href='/svg/sprite.svg#WezomLogo' />
        </svg>
        <Catalog />
      </div>
      <div className='flex flex-wrap justify-center items-center gap-y-9'>
        <ul className='flex gap-4 mr-auto'>
          <li>
            <Link
              href='/about'
              className='relative font-bold text-[14px] leading-[1.72px] text-[#33485d] after:content-[""] after:block after:absolute
              after:left-0 after:-bottom-1 after:w-[100%] after:h-[1px] after:bg-[#33485d]
              after:rounded-full
              '
            >
              О Компании
            </Link>
          </li>
          <li>
            <Link
              href='/delivery-and-payment'
              className='relative font-bold text-[14px] leading-[1.72px] text-[#5c6d7d] before:content-[""] before:block
             before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-[10px] before:w-[6px]
              before:h-[6px] before:bg-[#DDE8F0] before:rounded-full'
            >
              Доставка и оплата
            </Link>
          </li>
          <li>
            <Link
              href='/warranty'
              className='relative font-bold text-[14px] leading-[1.72px] text-[#5c6d7d] before:content-[""] before:block
              before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-[10px] before:w-[6px]
              before:h-[6px] before:bg-[#DDE8F0] before:rounded-full'
            >
              Гарантия
            </Link>
          </li>
        </ul>
        <a
          href='tel:+380680000000'
          className='font-bold text-[14px] leading-[1.2px] text-[#33485d] uppercase'
        >
          +380 68 000 00 00
        </a>
        <SearchBox />
      </div>
      <div className='flex flex-col justify-center items-end gap-y-8'>
        <div className='flex gap-[62px]'>
          <LanguageSwitcher />
          <Login />
        </div>
        <ProductActions
          hasBasketCard={true}
          productQuantity={productQuantity}
        />
      </div>
    </header>
  );
};

export default Header;
