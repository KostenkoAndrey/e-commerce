import React, { useEffect, useRef } from 'react';
import SvgIcon from '@/components/svgIcon';

export interface CatalogItemProps {
  categories: string[];
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const CatalogItem = ({ categories, setOpenMenu }: CatalogItemProps) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <ul
      ref={menuRef}
      className='absolute top-full md:left-0 flex flex-col gap-[6px] px-2 py-2 w-[75vw] md:w-[50vw] lg:w-full
      rounded-[10px] lg:rounded-t-none lg:rounded-b-[10px] z-10 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)]
    bg-white  text-[14px] md:text-[18px]'
    >
      {categories.map((category, index) => (
        <li
          key={index}
          className='flex justify-between items-center p-2 cursor-pointer hover:bg-[#dde8f0] rounded-[10px]'
        >
          <div className='flex gap-4 items-center'>
            <SvgIcon name={`icon-${index + 1}`} style={'w-[34px] h-[34px]'} />
            <p className='font-medium text-[1em] leading-[3.9px] text-[#5c6d7d]'>{category}</p>
          </div>
          <SvgIcon name={'Path'} style={'h-4 w-[10px]'} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogItem;
