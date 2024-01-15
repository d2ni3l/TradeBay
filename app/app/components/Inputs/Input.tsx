'use client'

import React, { useState } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { FieldValues, UseFormRegister } from "react-hook-form";
interface InputProps {
  label: string;
  type: string;
  id: string;
  register: UseFormRegister<FieldValues>
  Icon?: IconType;
  classNames?: string
  iconClassNames?: string
  disabled: boolean
  required?: boolean
}
export default function Input({ type, label, id, Icon, classNames, iconClassNames, required, disabled, register }: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className='relative w-full'>
      <input
        className={twMerge(
            `
           
            bg-gray-100 text-black 
        rounded-full px-5 text-sm py-[.6rem] outline-none border-none placeholder:font-medium placeholder:text-gray-400 w-full`, classNames
        )}
        {...register(id, {required: required})}
        placeholder={label}
        type='text'
        id={id}
        
        onFocus={() => {
          setFocused(true);
        }}
        disabled={disabled}
        onBlur={() => {
          setFocused(false);
        }}
      />
      <span 
            className={twMerge(
                `${
                    focused ? "text-gray-600" : "text-gray-400"
                  }  absolute top-[9px] right-[13px] max-w-[50px]`, iconClassNames
            )}>{Icon && <Icon size={25}/>}</span>
    </div>
  );
}
