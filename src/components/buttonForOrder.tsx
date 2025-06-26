import React from 'react';

export interface BtnProps {
  children: React.ReactNode;
  style: string;
}

const ButtonForOrder = ({ children, style }: BtnProps) => {
  return (
    <button
      type='button'
      className={`coursor-pointer hover:bg-[#1e8749] active::bg-[#1e8749] transition duration-700 ease-in-out ${style}`}
    >
      {children}
    </button>
  );
};

export default ButtonForOrder;
