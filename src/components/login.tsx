import React from 'react';
import Link from 'next/link';

export interface LoginProps {
  children?: React.ReactNode;
  style: string;
}

const Login = ({ children, style }: LoginProps) => {
  return (
    <Link
      className={`${style} flex gap-3 items-center font-bold text-[0.75rem] xl:text-[0.875rem] leading-[1.2] text-[#5c6d7d] hover:text-[#33485d] lg:mr-4`}
      href='/login'
    >
      {children}
    </Link>
  );
};

export default Login;
