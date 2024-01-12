'use client'

import React, { useState } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
interface InputProps {
  label: string;
  type: string;
  id: string;
  Icon?: IconType;
  classNames?: string
  iconClassNames?: string
  disabled?: string
}
export default function Input({ type, label, id, Icon, classNames, iconClassNames, disabled }: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className='relative w-full'>
      <input
        className={twMerge(
            `bg-gray-100 text-black 
      
        rounded-full px-5 text-sm py-[.6rem] outline-none border-none placeholder:font-medium placeholder:text-gray-400 w-full`, classNames
        )}
        placeholder={label}
        type='text'
        id={id}
        onFocus={() => {
          setFocused(true);
        }}
        // disabled={disabled}
        onBlur={() => {
          setFocused(false);
        }}
      />
      <span 
            className={twMerge(
                `${
                    focused ? "text-gray-600" : "text-gray-400"
                  } absolute top-[9px] right-[13px] max-w-[50px]`, iconClassNames
            )}>{Icon && <Icon size={25}/>}</span>
    </div>
  );
}
