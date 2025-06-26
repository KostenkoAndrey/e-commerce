import React from 'react';
import Link from 'next/link';

export interface NavigationItemProps {
  children: React.ReactNode;
  pathname: string;
  href: string;
}

const NavigationItem = ({ children, pathname, href }: NavigationItemProps) => {
  return (
    <Link
      href={href}
      className={`relative text-[1em]
          ${pathname === href ? 'text-[#33485d]' : 'text-[#5c6d7d]'} hover:text-[#33485d] hover:after:content-[""]
          hover:after:block hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[1px]
          hover:after:bg-[#33485d] hover:after:rounded-full after:transition-all after:duration-300 after:rounded-full
          ${
            pathname === href
              ? 'after:content-[""] after:block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-[#33485d] after:rounded-full'
              : ''
          } `}
    >
      {children}
    </Link>
  );
};

export default NavigationItem;
