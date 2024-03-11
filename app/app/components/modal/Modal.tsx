import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { lemon } from "@/app/font";
import Button from "../Button";
import Heading from "../Heading";
interface Modal {
  open: boolean;
  onSubmit?: () => void;
  actionLabel?: string;
  secondaryActionLabel?: string;
  secondaryAction?: () => void;
  body?: React.ReactElement;
  title: string;
  description: string;
  closeModal?: () => void;
}
export default function Modal({
  open,
  onSubmit,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  body,
  description,
  title,
  closeModal,
}: Modal) {
  return (
    <div
      className={`absolute z-[100] bg-black/60 flex justify-center h-[100vh] w-[100vw] items-center ${
        open ? " " : "hidden z-0"
      }`}>
      <div
        className='bg-white 
        relative 
        rounded-sm
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          px-5
          border-[#4c4c4c]
          h-full 
          lg:h-auto
          md:h-auto 
          z-[101]'>
        <div onClick={closeModal} className='flex justify-end pt-3'>
          <IoMdCloseCircleOutline
            size={27}
            color='black'
            className='cursor-pointer'
          />
        </div>

        {description && <Heading title={title} subtitle={description} center />}

        

        {body}


        <div className='flex justify-center gap-10'>
          {secondaryAction && (
            <Button
              className={`border-2 border-[#4c4c4c] hover:border-black hover:text-black text-base text-[#4c4c4c]  px-5 py-2 font-medium rounded-md bg-white   transition-all`}
              labelClassName=''
              label={secondaryActionLabel}
              onClick={secondaryAction}
            />
          )}
          <Button
            className={`border-2 hover:border-[#4c4c4c] border-black text-black text-base hover:text-[#4c4c4c]  px-5 py-2 font-medium rounded-md bg-white   transition-all`}
            labelClassName=''
            label={actionLabel}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
