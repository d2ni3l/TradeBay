"use client";

import React, { createRef, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Input from "../Inputs/Input";
import { useForm } from "react-hook-form";
export default function Search() {
  const [focused, setFocused] = useState(false);


  const {register} = useForm()

  


  return (
    <>
      <div className='relative group'>
        
        <Input
        register={register}
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
