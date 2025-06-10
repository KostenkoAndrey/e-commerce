import React from 'react';

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <div className=' bg-[#0d4128] '>
      <div className='w-[1520px] px-10 py-[21px] mx-auto flex justify-between items-center '>
        <p className='font-normal text-[14px] leading-[1.3] text-white opacity-50'>
          2021 &#169; Wezom Test
        </p>
        <p className='font-normal text-[14px] leading-[1.3] text-white opacity-50'>
          Тестовое
          <span className='text-[#677583]'>\</span>
          <span className='text-[#97adc2]'>\</span>
          Wezom
        </p>
      </div>
    </div>
  );
};

export default Footer;
