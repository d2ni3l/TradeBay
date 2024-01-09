'use client'

import React, { useState } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
interface InputProps {
  label: string;
  type: string;
  id: string;
  Icon?: IconType;
  classNames: string
}
export default function Input({ type, label, id, Icon, classNames }: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className='relative'>
      <input
        className={twMerge(
            `bg-gray-100 text-black 
        md:w-[500px]
        rounded-full px-5 text-sm py-[.6rem] outline-none border-none placeholder:font-medium placeholder:text-gray-400 w-full`, classNames
        )}
        placeholder={label}
        type='text'
        id={id}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      />
      <span 
            className={`${
              focused ? "text-gray-600" : "text-gray-400"
            } absolute top-[9px] right-[13px]`}>{Icon && <Icon size={25}/>}</span>
    </div>
  );
}
