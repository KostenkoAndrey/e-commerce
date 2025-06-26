import React from 'react';

export interface SvgIconProps {
  name: string;
  style: string;
}

const SvgIcon = ({ name, style }: SvgIconProps) => {
  return (
    <svg className={style}>
      <use href={`/svg/sprite.svg#${name}`} />
    </svg>
  );
};

export default SvgIcon;
