import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Button {
  bgColor?: string;
  icon?: IconType;
  label?: string;
  className: string;
  iconSize?: number;
}

export default function Button({
  bgColor,
  icon: Icon,
  label,
  className,
  iconSize,
}: Button) {
  return (
    <button className={twMerge(`  bg-black text-white `, className)}>
      {label && <p>{label}</p>} {Icon && <Icon size={iconSize} />}
    </button>
  );
}
