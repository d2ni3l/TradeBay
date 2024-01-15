import React from "react";
import Heading from "../components/Heading";
import Input from "../components/Inputs/Input";
import { RiAccountCircleLine } from "react-icons/ri";
import Button from "../components/Button";
import { TfiEmail } from "react-icons/tfi";
import { lemon } from "../layout";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegistrationSchemaType } from "../zodSchema";

export default function RegisterBox() {
  const disabled = false;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
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
              disabled={disabled}
              register={register}
              required
              label='Name'
              iconClassNames='left-[15px] top-[18px] '
              classNames={`${
                errors.name ? "outline-red-500" : "focus:outline-gray-500"
              } rounded-sm tracking-wide py-5 pl-[3.4rem] w-full`}
              type='text'
              id='name'
              Icon={RiAccountCircleLine}
            />
            {errors.name && (
              <span className='text-red-500 pt-2 text-sm'>
                {errors.name.message as string}
              </span>
            )}
          </div>

          <div>
            <Input
              disabled={disabled}
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
              <span className='text-red-500 pt-2 text-sm'>
                {errors.email.message as string}
              </span>
            )}
          </div>

          <div>
            <Input
              disabled={disabled}
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
              <span className='text-red-500 pt-2 text-sm'>
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
