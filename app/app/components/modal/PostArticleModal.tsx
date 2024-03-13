"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../Inputs/Input";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import postArticleModal from "@/app/hooks/postArticleModal";
export default function PostArticleModal() {
  const open = postArticleModal((state) => state.open);

  const closeModal = postArticleModal((state) => state.closeModal);
  const disabled = false;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      condition: "good",
    },
  });
  console.log(watch());
  const body = (
    <>
      <div className='pt-2' />
      <Input
        disabled={disabled}
        register={register}
        required
        label='Title'
        iconClassNames=''
        classNames={`${
          errors.password ? "outline-red-500" : "focus:outline-gray-500"
        } rounded-sm tracking-wide py-3  w-full`}
        type='text'
        id='title'
        Icon={MdOutlineSubtitles}
      />
      <div className='pt-2'></div>
      <Input
        disabled={disabled}
        register={register}
        required
        label='Desc'
        iconClassNames=''
        classNames={`${
          errors.password ? "outline-red-500" : "focus:outline-gray-500"
        } rounded-sm tracking-wide pb-10  w-full`}
        type='text'
        id='description'
        Icon={MdOutlineDescription}
      />
      {/* // build input field for number and for selecting condition of article */}
      {/* <div className='flex justify-center items-center'>
        <Input
          disabled={disabled}
          register={register}
          required
          label='Desc'
          iconClassNames=''
          classNames=''
          type='number'
          id='price'
        />
      </div> 
      */}
    </>
  );
  return (
    <>
      <Modal
        open={open}
        title='Post Article'
        description='Best place online to sell things'
        closeModal={() => {
          closeModal();
        }}
        body={body}
        secondaryActionLabel='Go back'
        actionLabel='Next'
      />
    </>
  );
}
