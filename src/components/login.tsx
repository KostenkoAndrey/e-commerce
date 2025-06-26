import React from 'react';
import Link from 'next/link';

export interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <Link
      className='flex gap-3 items-center font-bold text-[0.75rem] xl:text-[0.875rem] leading-[1.2] text-[#5c6d7d] hover:text-[#33485d]'
      href='/login'
    >
      Войти
      <svg className='w-10 h-10 lg:w-5 lg:h-5 fill-[#ffbe48]'>
        <use href='/svg/sprite.svg#User' />
      </svg>
    </Link>
  );
};

export default Login;
