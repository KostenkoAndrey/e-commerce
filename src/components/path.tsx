import React from 'react';
import { usePathname } from 'next/navigation';

export interface PathProps {}

const Path = ({}: PathProps) => {
  const pathname = usePathname();
  const path = pathname.split('/').filter(Boolean).join('-');

  return (
    <span className='hidden md:block py-3 lg:py-5 font-normal text-xs leading-[1.2] text-[#33485d] opacity-50'>
      {path}
    </span>
  );
};

export default Path;
