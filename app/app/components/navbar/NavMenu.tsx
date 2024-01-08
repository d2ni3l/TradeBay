import React from 'react'
import Button from '../Button'
import { FaPlus } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { lemon } from '@/app/layout';
export default function NavMenu() {
  return (
    <div className='flex justify-center gap-3'>
      <Button className='bg-white border border-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center text-gray-600'   iconSize={16}   icon={FaPlus}/>
      <Button className='bg-white border border-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center text-gray-600'   iconSize={16}   icon={IoMdPerson}/>
      <Button className={`rounded-full px-3 text-xs font-medium bg-[#fb0066] ${lemon.className}`} label='Add Product'/>
      
    </div>
  )
}
