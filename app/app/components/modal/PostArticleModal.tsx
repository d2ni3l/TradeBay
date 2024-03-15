"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../Inputs/Input";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import postArticleModal from "@/app/hooks/postArticleModal";
import ReactSelect from "../Inputs/ReactSelect";
import { selectCategory } from "../categories/categorieslist";

export default function PostArticleModal() {
  const open = postArticleModal((state) => state.open);

  console.log(selectCategory);

  const closeModal = postArticleModal((state) => state.closeModal);
  const disabled = false;
  const [selectValue, setSelectValue] = useState<
    { value: string | number; label: string | number } | {}
  >({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      condition: "good",
      category: "",
    },
  });
  console.log(selectValue);

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
      <div className='pt-5' />

      <ReactSelect
        setState={setSelectValue}
        options={selectCategory}
        focusedStateStyle='border-red-500'
        unFocusedStateStyle=' '
        // classNames={{
        //   control: (state) =>
        //     state.isFocused ? 'border-red-600' : 'border-grey-300',
        // }}
      />
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
