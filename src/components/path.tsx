import React from 'react';
import { usePathname } from 'next/navigation';

export interface PathProps {}

const Path = ({}: PathProps) => {
  const pathname = usePathname();
  const path = pathname.split('/').filter(Boolean).join('-');
  
  return (
    <p className='py-5 font-normal text-xs leading-[1.2] text-[#33485d] opacity-50'>
      {path}
    </p>
  );
};

export default Path;
