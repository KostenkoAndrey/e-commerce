import React from 'react';
import { useForm, useController } from 'react-hook-form';

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
      validate: (value) =>
        value.trim() !== '' || 'Запрос не должен быть пустым',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Search:', data.search);
  };

  return (
    <div className='relative w-full'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Search, for example Test'
          {...field}
          className='w-full px-4 py-[14px] rounded-[10px] bg-[#dde8f0] placeholder-[#33485d] placeholder:text-[16px] placeholder:leading-[1.2px]
        placeholder:font-normal placeholder:opacity-70 outline-none'
        />
        <button type='submit'>
          <svg className='w-[18px] h-[18px] stroke-[#33485d] absolute top-1/2 -translate-y-1/2 right-4'>
            <use href='/svg/sprite.svg#Magnifier' />
          </svg>
        </button>
      </form>
      {errors.search && (
        <p className='text-red-500 text-sm mt-1 absolute -bottom-5 left-4'>
          {errors.search.message}
        </p>
      )}
    </div>
  );
};

export default SearchBox;
