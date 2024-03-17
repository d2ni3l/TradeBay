"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { FieldValues, useForm } from "react-hook-form";
import Select from "react-select";
import Input from "../Inputs/Input";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import postArticleModal from "@/app/hooks/postArticleModal";
import ReactSelect from "../Inputs/ReactSelect";
import { selectCategory } from "../categories/categorieslist";
import { SiGraylog } from "react-icons/si";
import Counter from "../Inputs/Counter";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaDollarSign } from "react-icons/fa6";

export default function PostArticleModal() {
  const open = postArticleModal((state) => state.open);

  const selectCategoryUsed = [...selectCategory];

  const closeModal = postArticleModal((state) => state.closeModal);
  const disabled = false;

  const [priceValue, setPriceValue] = useState<number>(0);

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
      condition: "",
      category: "",
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
        } rounded-sm tracking-wide py-3  w-full placeholder:text-black`}
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
        } rounded-sm tracking-wide pb-10  w-full placeholder:text-black`}
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
      <div className='pt-2' />

      <Input
        disabled={disabled}
        register={register}
        required
        label='Price'
        iconClassNames=''
        classNames={`${
          errors.password ? "outline-red-500" : "focus:outline-gray-500"
        } rounded-sm tracking-wide  w-full placeholder:text-black`}
        type='number'
        id='price'
        Icon={FaDollarSign}
      />

      <div className='pt-2'></div>
      <div className='relative'>
        <Select
          options={selectCategoryUsed}
          placeholder={ <p className='text-sm text-black'>Select Category</p> }
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#6b7280" : "",
              backgroundColor: "#f3f4f6",
              padding: "16",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 6,

            colors: {
              ...theme.colors,
              primary: "black",
              primary25: "#fca5a5",
              primary50: "3adbb9",
              primary75: "3adbb9",
            },
          })}
        />
      </div>

      <div className='py-2'>
        <h2 className=' font-medium'>Condition of Article</h2>
      </div>
      <RadioGroup
        defaultValue='new'
        onValueChange={(value) => {
          setValue("condition", value);
        }}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='new' id='r1' />
          <Label htmlFor='r1' className='text-[#4c4c4c]'>
            New
          </Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='acceptable' id='r2' />
          <Label htmlFor='r2' className='text-[#4c4c4c]'>
            Acceptable
          </Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='used' id='r3' />
          <Label htmlFor='r3' className='text-[#4c4c4c]'>
            Used
          </Label>
        </div>
      </RadioGroup>

      {/* <Counter title='Price' subtitle='How much does your article cost?' value={priceCount} onChange={(value) => {setValue('price', value)}} /> */}
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
