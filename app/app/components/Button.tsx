import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import LoadingSpinner from "./LoadingSpinner";

interface Button {
  bgColor?: string;
  icon?: IconType;
  label?: string;
  className?: string;
  onClick?: () => void;
  iconSize?: number;
  labelClassName?: string;
 isLoading?: boolean
 iconClassName?: string
  

  type?: "button" | "reset" | "submit";
}

export default function Button({
  icon: Icon,
  label,
  className,
  iconSize,
  labelClassName,
  onClick,
  type,
  isLoading,
  iconClassName
}: Button) {
  return (
    <button
      type={type === undefined ? "button" : type}
      onClick={onClick}
      className={twMerge(
        `  bg-black text-white transition-all duration-300`,
        className
      )}>
      {label && <span className={twMerge("flex items-center gap-3 justify-center", labelClassName)}>{isLoading && <LoadingSpinner color='#000' size={20} />} {label}</span>}
      {Icon && <Icon className={iconClassName} size={iconSize} />}
      
    </button>
  );
}


// look into error 


//to fixed define loading spinner in button.tsx then use isLoading prop to control loading state