import React from 'react';

export interface SwichLangProps {}

const LanguageSwitcher = ({}: SwichLangProps) => {
  const [language, setLanguage] = React.useState<string>('UA');

  return (
    <div className='flex gap-[30px]'>
      <button
        className='font-bold text-[14px] leading-[1.2px] text-[#33485d] tracking-wider cursor-pointer'
        onClick={() => setLanguage('UA')}
      >
        UA
      </button>
      <button
        className='relative font-bold text-[14px] leading-[1.2px] text-[#33485d] tracking-wider cursor-pointer
        before:content-[""] before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
        before:-translate-x-[15px] before:w-[6px] before:h-[6px] before:bg-[#DDE8F0] before:rounded-full'
        onClick={() => setLanguage('RU')}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
