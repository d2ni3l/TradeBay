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
}

export default function Button({
  bgColor,
  icon: Icon,
  label,
  className,
  iconSize,
  labelClassName,
  onClick
}: Button) {
  return (
    <button onClick={onClick} className={twMerge(`  bg-black text-white hover:scale-[.9] transition-all duration-300 focus:scale-[.9]`, className)}>
      {label && <span className={twMerge('', labelClassName)}>{label}</span>} {Icon && <Icon size={iconSize} />}
    </button>
  );
}
