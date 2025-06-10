import React from 'react';
import Link from 'next/link';

export interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <Link
      className='flex gap-3 items-center font-bold text-[14px] leading-[1.2px] text-[#33485d] mr-5'
      href='/login'
    >
      Войти
      <svg className='w-[20px] h-[20px] fill-[#ffbe48]'>
        <use href='/svg/sprite.svg#User' />
      </svg>
    </Link>
  );
};

export default Login;
