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

import Button from "../Button";
import axios from "axios";

export default function PostArticleModal() {
  const open = postArticleModal((state) => state.open);
  const [missingValue, setMissingValue] = useState(false);

  const selectCategoryUsed = [...selectCategory];

  const closeModal = postArticleModal((state) => state.closeModal); // global state with zustand

  const disabled = false;

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
      condition: "new",
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
        <h2 className=' font-bold text-lg '>Condition of article</h2>
        <span>
          <Drawer>
            <DrawerTrigger>
              <IoMdInformationCircleOutline className='mt-2' />
            </DrawerTrigger>
            <DrawerContent className='z-[500] bg-[#09090b] text-white flex justify-center'>
              <DrawerHeader className='flex justify-center'>
                <DrawerTitle className='text-xl'>
                  Understanding condition guidelines
                </DrawerTitle>
              </DrawerHeader>

              <div className='flex flex-col justify-center items-center gap-1'>
                <div className=' max-w-[350px]'>
                  <p>
                    <span className='font-semibold '>New:</span>{" "}
                    <span className='text-xs text-gray-400'>
                      Article listed as "New" must be unused, unopened, and in
                      their original packaging. They should show no signs of
                      wear or damage.
                    </span>
                  </p>
                </div>
                <div className=' max-w-[350px]'>
                  <p>
                    <span className='font-semibold '>Used:</span>{" "}
                    <span className='text-xs text-gray-400'>
                      Article in this condition may have visible signs of wear
                      and tear but should still function properly.
                    </span>
                  </p>
                </div>
                <div className=' max-w-[350px]'>
                  <p>
                    <span className='font-semibold '>Acceptable:</span>{" "}
                    <span className='text-xs text-gray-400'>
                      Article listed as "Acceptable" may have significant
                      cosmetic damage, such as large scratches or dents.
                      However, they should still be in good working condition
                      and should function as intended.
                    </span>
                  </p>
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose>
                  <Button
                    className='basis-0 w-[40%] transition-all hover:bg-black outline-none hover:outline-white hover:outline-[1px] hover:scale-[.99]  hover:text-white py-2 bg-white rounded-full text-black'
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
      <ImageUpload onChange={(value) => setValue("imgSrc", value)} />

      {
        missingValue ? <p className='pt-1 font-semibold text-sm text-red-500 flex justify-center'>
        <span>Please complete form</span>
      </p> : null
      }
    </>
  );

  console.log(watch())

  const postArticle = handleSubmit((data) => {
    setMissingValue(false);

    if (
      !data.title ||
      !data.description ||
      !data.price ||
      !data.condition ||
      !data.imgSrc ||
      !data.category
    ) {
      setMissingValue(true);

      return null;
    }

    axios.post("/api/postArticle", data).then((response) => {
      console.log(response);
      if(response.data?.error){
        console.log('User needs to sign in')
      }
    }).finally(() => {

    })
  });

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
        onSubmit={() => {
          postArticle();
        }}
      />
    </>
  );
}
