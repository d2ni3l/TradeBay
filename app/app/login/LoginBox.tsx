"use client";

import React from "react";
import Heading from "../components/Heading";
import Input from "../components/Inputs/Input";
import Button from "../components/Button";
import { TfiEmail } from "react-icons/tfi";
import { lemon } from "../layout";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema,  } from "../zodSchema";

import { useRouter } from "next/navigation";
export default function LoginBox() {


    const isLoading = false;

  const router = useRouter()
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

 
const onSubmit = handleSubmit((data) => {
    console.log(data)
})
  return (
    <>
      <form
        onSubmit={onSubmit}
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
          <Image
            src='/images/logo.svg'
            alt='Trade Bay logo'
            width='70'
            height='70'
          />
        </div>

        <div className='space-y-5 w-full'>
          <div>
            <Input
              disabled={isLoading}
              register={register}
              required
              label='E-mail'
              iconClassNames='left-[15px] top-[18px]'
              classNames={`${
                errors.email ? "outline-red-500" : "focus:outline-gray-500"
              } rounded-sm tracking-wide py-5 pl-[3.4rem] w-full`}
              type='text'
              id='email'
              Icon={TfiEmail}
            />

            {errors.email && (
              <span className='text-red-500 pt-2 text-xs'>
                {errors.email.message as string}
              </span>
            )}
          </div>

          <div>
            <Input
              disabled={isLoading}
              register={register}
              required
              label='Password'
              iconClassNames='left-[15px] top-[18px]'
              classNames={`${
                errors.password ? "outline-red-500" : "focus:outline-gray-500"
              } rounded-sm tracking-wide py-5 pl-[3.4rem] w-full`}
              type='text'
              id='password'
              Icon={RiLockPasswordLine}
            />

            {errors.password && (
              <span className='text-red-500 pt-2 text-xs'>
                {errors.password.message as string}
              </span>
            )}
          </div>
        </div>

        <div className='pt-8'></div>

        <Button
          type='submit'
          className={`relative flex py-3  
           px-4 md:px-0 rounded-sm w-full  items-center justify-center overflow-hidden bg-gray-800  ${lemon.className}`}
          labelClassName='relative z-10 text-xs'
          label='Create Account'
        />

        <div className='pt-8'></div>
      </form>
    </>
  );
}
