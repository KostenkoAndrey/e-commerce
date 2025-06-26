import React from 'react';

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <div className=' bg-[#0d4128]'>
      <div
        className='w-full max-w-[1520px] px-[10px] xl:px-10 py-5 h-[60px] mx-auto flex justify-between items-center text-[1rem] leading-[1.3] text-white opacity-50
         font-normal'
      >
        <span className='text-[0.875em] opacity-50'>2021 &#169; Wezom Test</span>
        <span className='text-[0.875em] opacity-50'>
          Тестовое <span className='text-[#677583]'>\</span>
          <span className='text-[#97adc2]'>\</span> Wezom
        </span>
      </div>
    </div>
  );
};

export default Footer;
