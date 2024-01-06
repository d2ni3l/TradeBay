import React from "react";
import { IoMdSearch } from "react-icons/io";
export default function Search() {
  return (
    <>
      <div className="relative">
      <input
        className='bg-gray-100 text-black rounded-full px-4 py-[.6rem] outline-none border-none placeholder:font-medium placeholder:text-gray-400 w-full'
        placeholder='Search for products'
        type='text'
        id='searchProducts'
      />

      <IoMdSearch size={25} className='absolute top-[6px] right-[13px] text-gray-400' />
      </div>
    </>
  );
}
