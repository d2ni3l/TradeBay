'use client'

import Image from "next/image";
import React from "react";
import Logo from "../components/navbar/Logo";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Inputs/Input";
import { TfiEmail } from "react-icons/tfi";
import { lemon } from "../layout";

export default function page() {
  return (
    <>
      <main className='flex justify-center items-center w-full h-[70vh]'>
        <div
          className='bg-white border rounded-md px-10  w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto'>
          <div className='pt-14'></div>
          <Heading title='Create an Account' center />
          <div className="pt-14"></div>

          <div className='space-y-5'>
            <Input label='E-mail' iconClassNames='left-[15px] top-[18px]' classNames='rounded-sm tracking-wide py-5 focus:outline-gray-500 pl-[3.4rem]' type='text' id='email' Icon={TfiEmail} />
            <Input label='E-mail' iconClassNames='left-[15px] top-[18px]' classNames='rounded-sm tracking-wide py-5 focus:outline-gray-500 pl-[3.4rem]' type='text' id='email' Icon={TfiEmail} />

            
          </div>

          <div className='pt-8'></div>

          <Button
            className={`relative flex h-[40px] rounded-full w-[120px]  items-center justify-center overflow-hidden bg-[#fb0066] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-800 before:duration-500 before:ease-out hover:shadow-gray-800 hover:before:h-56 hover:before:w-56 ${lemon.className}`}
            labelClassName='relative z-10 text-xs'
            label='Create Account'
          />

          <div className='pt-8'></div>
        </div>
      </main>
    </>
  );
}
