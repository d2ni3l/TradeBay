"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { FieldValues, useForm } from "react-hook-form";
import Select from "react-select";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Input from "../Inputs/Input";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import postArticleModal from "@/app/hooks/postArticleModal";
import ReactSelect from "../Inputs/ReactSelect";
import { selectCategory } from "../categories/categorieslist";
import { SiGraylog } from "react-icons/si";
import Counter from "../Inputs/Counter";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaDollarSign } from "react-icons/fa6";
import ImageUpload from "../Inputs/ImageUpload";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Button from "../Button";

export default function PostArticleModal() {
  const open = postArticleModal((state) => state.open);

  const selectCategoryUsed = [...selectCategory];

  const closeModal = postArticleModal((state) => state.closeModal);
  const disabled = false;

  const [imageValue, setImageValue] = useState<any>();

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
      price: "",
      condition: "",
      category: "",
      imgSrc: "",
    },
  });

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
        } rounded-sm tracking-wide pb-10  w-full placeholder:text-black`}
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

      <div className='pt-2' />

      <Input
        disabled={disabled}
        register={register}
        required
        label='Price'
        iconClassNames=''
        classNames={`${
          errors.password ? "outline-red-500" : "focus:outline-gray-500"
        } rounded-sm tracking-wide pb-10  w-full placeholder:text-black`}
        type='number'
        id='price'
        Icon={FaDollarSign}
      />

      <div className='pt-2'></div>
      <div className='relative'>
        <Select
          options={selectCategoryUsed}
          placeholder={
            <p className='text-sm text-black font-medium'>Select Category</p>
          }
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: "transparent",
              font: "600",
              backgroundColor: "#f3f4f6",
              paddingLeft: "6px",
              paddingBlock: "14px",
              borderRadius: "0",
            }),
          }}
          onChange={(choice) => {
            setValue("category", choice?.value);
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

      <div className='pt-4 pb-2 flex items-center gap-1'>
        <h2 className=' font-bold text-lg '>Condition of Article</h2>
        <span>
          <Drawer>
            <DrawerTrigger>
              <IoMdInformationCircleOutline className='mt-2' />
            </DrawerTrigger>
            <DrawerContent className='z-[500] bg-[#09090b] text-white'>
              <DrawerHeader className='flex justify-center'>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription className='flex justify-center'>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button
                    className='w-[80%] py-3 bg-white rounded-full text-black'
                    label='Ok, Got it'
                  />
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </span>
      </div>
      <RadioGroup
        defaultValue='new'
        onValueChange={(value) => {
          setValue("condition", value);
        }}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='new' id='r1' />
          <Label htmlFor='r1' className='text-black'>
            New
          </Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='acceptable' id='r2' />
          <Label htmlFor='r2' className='text-black'>
            Acceptable
          </Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='used' id='r3' />
          <Label htmlFor='r3' className='text-black'>
            Used
          </Label>
        </div>
      </RadioGroup>

      {/* <Counter title='Price' subtitle='How much does your article cost?' value={priceCount} onChange={(value) => {setValue('price', value)}} /> */}

      <div className='pt-4'></div>

      <div className='p-2'>
        <h3 className='font-bold text-lg text-center'>
          Upload an image of your article
        </h3>
      </div>
      <ImageUpload onChange={(value) => setValue("image", value)} />
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
        actionLabel='Post Article'
      />
    </>
  );
}
