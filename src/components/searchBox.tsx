'use client';

import React from 'react';
import { useForm, useController } from 'react-hook-form';
import SvgIcon from '@/components/svgIcon';

export interface SearchBoxProps {}

type FormValues = { search: string };

const SearchBox = ({}: SearchBoxProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    defaultValues: {
      search: '',
    },
  });

  const { field } = useController({
    name: 'search',
    control,
    rules: {
      required: 'Введите запрос',
      validate: (value) => value.trim() !== '' || 'Запрос не должен быть пустым',
    },
  });

  const onSubmit = () => {};

  return (
    <div className='relative w-full text-[12px] lg:text-[16px]'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Search, for example Test'
          {...field}
          className='w-full px-4 py-3.5 rounded-[10px] bg-[#dde8f0] placeholder-[#33485d] placeholder:text-[1em] placeholder:leading-[1.2px]
        placeholder:font-normal placeholder:opacity-70 outline-none focus:outline-blue-400 focus:ring-4'
        />
        <button type='submit' aria-label='Submit'>
          <SvgIcon
            name={'Magnifier'}
            style={'w-[18px] h-[18px] stroke-[#33485d] absolute top-1/2 -translate-y-1/2 right-4'}
          />
        </button>
      </form>
      {errors.search && (
        <span className='text-red-500 text-sm mt-1 absolute -bottom-5 left-4'>{errors.search.message}</span>
      )}
    </div>
  );
};

export default SearchBox;
