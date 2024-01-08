"use client";

import React, { createRef, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
export default function Search() {
  const [focused, setFocused] = useState(false);

  


  return (
    <>
      <div className='relative group'>
        <input
          className='bg-gray-100 text-black 
          md:w-[500px]
          rounded-full px-5 text-sm py-[.6rem] outline-none border-none placeholder:font-medium placeholder:text-gray-400 w-full '
          placeholder='Search for products'
          type='text'
          id='searchProducts'
          onFocus={() => {setFocused(true)}}
          onBlur={() => {setFocused(false)}}

        />

        <button>
          <IoMdSearch
            tabIndex={0}
            size={25}
            className={`${
              focused ? "text-gray-600" : "text-gray-400"
            } absolute top-[9px] right-[13px]`}
          />
        </button>
      </div>
    </>
  );
}
