import React from 'react';
import { useForm } from 'react-hook-form';

export interface CallbackFormProps {}

type FormValues = { phone: string };

const CallbackForm = ({}: CallbackFormProps) => {
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

  const onSubmit = (data: FormValues) => {
    console.log('Phone:', data.phone);
    setValue('phone', '');
  };

  return (
    <div className='px-[330px] pt-[34px] pb-[50px] bg-[#0d4128] text-center'>
      <h3 className='font-normal text-[30px] leading-[1.2] text-white mb-5'>
        Нужна помощь в подборе товара? Мы перезваниваем?
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative flex items-center justify-between w-[586px] p-0.5 mx-auto bg-white rounded-[3px]'
      >
        <input
          type='tel'
          placeholder='+38 (0XX) XX - XX - XXX'
          {...register('phone', {
            required: 'Поле не должно быть пустым',
            pattern: {
              value: /^[+\d\s()-]+$/,
              message: 'Допустимы только цифры, пробелы, скобки и "+"',
            },
          })}
          className='flex-grow py-[18px] px-5 font-normal text-[16px] leading-[1.2] text-[#33485d] rounded-[3px] outline-none placeholder:font-normal
          placeholder:text-[16px] placeholder:leading-[1.2] placeholder:text-[#33485d] placeholder:uppercase placeholder:opacity-70'
        />
        <button
          type='submit'
          className='w-[213px] py-[14px] px-[48px] font-medium text-[24px] leading-[1.2] text-white bg-[#ffa800] rounded-[3px] cursor-pointer'
        >
          Отправить
        </button>
        {errors.phone && (
          <p className='absolute text-red-500 text-sm -bottom-5 left-6'>
            {errors.phone.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default CallbackForm;
