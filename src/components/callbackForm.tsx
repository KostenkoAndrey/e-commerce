import React from 'react';

export interface CallbackFormProps {}

const CallbackForm = ({}: CallbackFormProps) => {
  return (
    <div className='px-[330px] pt-[34px] pb-[50px] bg-[#0d4128] text-center'>
      <h3 className='font-normal text-[30px] leading-[1.2] text-white mb-5'>
        Нужна помощь в подборе товара? Мы перезваниваем?
      </h3>
      <div className='flex items-center w-[586px] p-0.5 mx-auto bg-white rounded-[3px]'>
        <input
          type='tel'
          placeholder='+38 (0XX) XX - XX - XXX'
          className='flex-grow py-[18px] px-5 font-normal text-[16px] leading-[1.2] text-[#33485d] rounded-[3px] placeholder:font-normal
          placeholder:text-[16px] placeholder:leading-[1.2] placeholder:text-[#33485d] placeholder:uppercase placeholder:opacity-70'
        />
        <button
          type='submit'
          className='w-[213px] py-[14px] px-[48px] font-medium text-[24px] leading-[1.2] text-white bg-[#ffa800] rounded-[3px] cursor-pointer'
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default CallbackForm;
