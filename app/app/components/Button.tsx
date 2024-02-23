import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Button {
  bgColor?: string;
  icon?: IconType;
  label?: string;
  className?: string;
  onClick?: () => void,
  iconSize?: number;
  labelClassName?:string
 
  type?: 'button' | 'reset' | 'submit'
}

export default function Button({
  bgColor,

  icon: Icon,
  label,
  className,
  iconSize,
  labelClassName,
  onClick,
  type
}: Button) {

  
  return (
    <button  type={type === undefined ? 'button' : type} onClick={onClick} className={twMerge(`  bg-black text-white transition-all duration-300`, className)}>
      {label && <span className={twMerge('', labelClassName)}>{label}</span>} {Icon && <Icon size={iconSize} />}
    </button>
  );
}
