"use client";

import React, { createRef, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Input from "../Inputs/Input";
import { useForm } from "react-hook-form";
export default function Search() {
  const [focused, setFocused] = useState(false);


  const {register, } = useForm()

  

  function handleClick(e:React.KeyboardEvent<HTMLDivElement>){
   if (e.key === 'Enter'){
    console.log('key event detected')
    
   }
  }

  const disabled = false
  return (
    <>
      <div className='relative group' onKeyDown={handleClick}>

        
        <Input
        register={register}
        disabled={disabled}
        Icon={IoMdSearch}
        label='Search for Products'
        classNames="md:w-[500px]"
        id='search'
        type='text'
        />

        
      </div>
    </>
  );
}
