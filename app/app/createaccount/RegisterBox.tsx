import React from "react";
import Heading from "../components/Heading";
import Input from "../components/Inputs/Input";
import { RiAccountCircleLine } from "react-icons/ri";
import Button from "../components/Button";
import { TfiEmail } from "react-icons/tfi";
import { lemon } from "../layout";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
export default function RegisterBox() {
  return (
    <>
      <div
        className='bg-white border rounded-md px-10 shadow-lg  w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          
          '>
        <div className='pt-14'></div>
        <Heading
          title='Create an Account'
          subtitle='Welcome to TradeBay'
          center
        />
        <div className='py-2 flex justify-center'>

        <Image src='/images/logo.svg' alt='Trade Bay logo' width='70' height='70' />

        </div>




        

        <div className='space-y-5 w-full'>
          <Input
            label='Name'
            iconClassNames='left-[15px] top-[18px] '
            classNames='rounded-sm tracking-wide py-5 focus:outline-gray-500 pl-[3.4rem] w-full'
            type='text'
            id='Name'
            Icon={RiAccountCircleLine}
          />

          <Input
            label='E-mail'
            iconClassNames='left-[15px] top-[18px]'
            classNames='rounded-sm tracking-wide py-5 focus:outline-gray-500 pl-[3.4rem] w-full'
            type='text'
            id='email'
            Icon={TfiEmail}
          />

          <Input
            label='Password'
            iconClassNames='left-[15px] top-[18px]'
            classNames='rounded-sm tracking-wide py-5 focus:outline-gray-500 pl-[3.4rem] w-full'
            type='text'
            id='email'
            Icon={RiLockPasswordLine}
          />
        </div>

        <div className='pt-8'></div>

        <Button
          className={`relative flex py-3  
           px-4 md:px-0 rounded-sm w-full  items-center justify-center overflow-hidden bg-gray-800  ${lemon.className}`}
          labelClassName='relative z-10 text-xs'
          label='Create Account'
        />

        <div className='pt-8'></div>
      </div>
    </>
  );
}
