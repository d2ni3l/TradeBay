import React from "react";
import Button from "../Button";
import { FaPlus } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { lemon } from "@/app/layout";
export default function NavMenu() {
  return (
    <div className='flex justify-center gap-3'>
      <Button
        className='bg-white border border-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center text-gray-600'
        iconSize={16}
        icon={FaPlus}
      />
      <Button
        className='bg-white border border-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center text-gray-600'
        iconSize={16}
        icon={IoMdPerson}
      />
      <Button
        className={`relative flex h-[40px] rounded-full w-[120px]  items-center justify-center overflow-hidden bg-[#fb0066] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-800 before:duration-500 before:ease-out hover:shadow-gray-800 hover:before:h-56 hover:before:w-56 ${lemon.className}`}
        labelClassName='relative z-10 text-xs'
        label='Add Product'
      />
    </div>
  );
}
