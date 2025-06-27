'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMask } from '@react-input/mask';

type FormValues = { phone: string };

const CallbackForm = () => {
  const inputRef = useMask({
    mask: '+380 (__) __-__-___',
    replacement: { _: /\d/ },
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    defaultValues: {
      phone: '',
    },
  });

  useEffect(() => {
    register('phone', {
      required: 'Поле не должно быть пустым',
      pattern: {
        value: /^\+380 \(\d{2}\) \d{2}-\d{2}-\d{3}$/,
        message: 'Введите корректный номер',
      },
    });
  }, [register]);

  const onSubmit = () => {
    setValue('phone', '');
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div
      className='flex flex-col justify-center items-center gap-5 pt-[34px] pb-[50px] w-full bg-[#0d4128] text-center
      text-[0.5rem] lg:text-[0.75rem] xl:text-[1rem] leading-[1.2]'
    >
      <h3 className='font-normal text-[1.875em] text-white max-w-[780px] min-h-9'>
        Нужна помощь в подборе товара? Мы перезваниваем?
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className='relative flex flex-col lg:flex-row items-center justify-between w-full min-w-[300px]
        lg:w-[586px] p-0.5 mx-auto bg-white rounded-[3px] focus-within:ring-4 focus-within:ring-green-600'
        >
          <input
            ref={inputRef}
            type='tel'
            placeholder='+38 (0XX) XXX-XX-XX'
            onChange={(e) => setValue('phone', e.target.value)}
            className={
              'flex-grow py-[1.125em] px-[1.25em] font-normal text-[1em] text-[#33485d] rounded-[3px] outline-none ' +
              'placeholder:font-normal placeholder:text-[1em] placeholder:text-[#33485d] placeholder:uppercase placeholder:opacity-70'
            }
          />

          <button
            type='submit'
            className='w-full lg:w-[213px] py-[0.875em] px-[1em] font-medium text-[1.5em] text-white bg-[#ffa800]
          rounded-[3px] cursor-pointer hover:bg-[#e69500] active::bg-[#e69500] transition-colors duration-300 ease-in-out'
          >
            Отправить
          </button>
          {errors.phone && (
            <span className='absolute text-red-500 text-sm -bottom-5 lg:left-6 border border-none border-transparent'>
              {errors.phone.message}
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default CallbackForm;
