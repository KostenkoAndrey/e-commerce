'use client';
import React from 'react';

import LanguageSwitcher from '@/components/languageSwitcher';
import Login from '@/components/login';
import Catalog from '@/components/catalog';
import SearchBox from '@/components/searchBox';
import ProductActions from '@/components/productActions';
import SvgIcon from '@/components/svgIcon';
import Navigation from '@/components/navigation';
import MobileMenu from '@/components/mobileMenu';

const productQuantity = 13;

const Header = () => {
  return (
    <header className='flex lg:justify-between items-center gap-2 lg:gap-4 w-full p-2 max-w-[1520px] lg:px-5 xl:px-10 xl:py-5 mx-auto'>
      <MobileMenu />

      <div className='hidden lg:flex flex-col gap-4 w-full lg:max-w-[300px] xl:max-w-[371px]'>
        <SvgIcon name={'WezomLogo'} style={'w-[114px] h-[41px] fill-[#34495e]'} />
        <Catalog />
      </div>

      <div className='hidden flex-grow lg:flex flex-col gap-9'>
        <Navigation />
        <SearchBox />
      </div>

      <div className='hidden md:flex lg:flex-col justify-center items-center gap-8'>
        <div className='flex gap-2 lg:gap-[62px]'>
          <LanguageSwitcher />
          <Login />
        </div>
        <ProductActions hasBasketCard={true} productQuantity={productQuantity} />
      </div>
    </header>
  );
};

export default Header;
