'use client';

import React from 'react';

export interface SwichLangProps {}

const LanguageSwitcher = ({}: SwichLangProps) => {
  const [language, setLanguage] = React.useState<string>('UA');

  return (
    <div className='flex items-center gap-4 text-[0.625rem] xl:text-[0.875rem] font-bold leading-[1.2]'>
      <button
        className='text-[1em] text-[#5c6d7d] hover:text-[#33485d] tracking-wider cursor-pointer'
        aria-label='Language'
        onClick={() => setLanguage('UA')}
      >
        UA
      </button>
      <div className='flex items-center gap-3'>
        <span className='w-[6px] h-[6px] rounded-full bg-[#d9e6f0] inline-block'></span>
        <button
          className='text-[1em] text-[#5c6d7d] hover:text-[#33485d] tracking-wider cursor-pointer'
          aria-label='Language'
          onClick={() => setLanguage('RU')}
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
