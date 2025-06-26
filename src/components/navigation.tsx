import React from 'react';
import { usePathname } from 'next/navigation';
import NavigationItem from '@/components/navigationItem';

export interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const pathname = usePathname();
  return (
    <ul className='flex gap-[10px] lg:text-[0.625rem] xl:text-[0.875rem] w-full leading-[1.7] font-bold'>
      <li className='flex'>
        <NavigationItem pathname={pathname} href={'/about'}>
          О Компании
        </NavigationItem>
      </li>
      <li className='flex items-center gap-[10px]'>
        <span className='w-[6px] h-[6px] rounded-full bg-[#d9e6f0] inline-block'></span>
        <NavigationItem pathname={pathname} href={'/delivery-and-payment'}>
          Доставка и оплата
        </NavigationItem>
      </li>
      <li className='flex items-center gap-[10px]'>
        <span className='w-[6px] h-[6px] rounded-full bg-[#d9e6f0] inline-block'></span>
        <NavigationItem pathname={pathname} href={'/warranty'}>
          Гарантия
        </NavigationItem>
      </li>
      <li className='ml-auto'>
        <a
          href='tel:+380680000000'
          className='text-[1em] leading-[1.2] text-[#5c6d7d] hover:text-[#33485d] active::text-[#33485d] uppercase'
        >
          +380 68 000 00 00
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
