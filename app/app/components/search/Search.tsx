"use client";

import React, { createRef, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Input from "../Inputs/Input";
export default function Search() {
  const [focused, setFocused] = useState(false);

  


  return (
    <>
      <div className='relative group'>
        
        <Input
        Icon={IoMdSearch}
        label='Search for Products'
        id='search'
        type='text'
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
