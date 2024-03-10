import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { lemon } from "@/app/font";
interface Modal {
  open: boolean;
  onSubmit?: () => void;
  actionLabel?: string;
  secondaryActionLabel?: string;
  secondaryAction?: () => void;
  body?: React.ReactElement;
  title?: string;
  description?: string;
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
          
          h-full 
          lg:h-auto
          md:h-auto 
          z-[101]'>
        <div onClick={closeModal} className='flex justify-end pt-2'>
          <IoMdCloseCircleOutline
            size={27}
            color='black'
            className='cursor-pointer'
          />
        </div>

        <div
          className={`text-center font-medium text-black text-xl ${lemon.className}`}>
          {title}
        </div>

        {description && <p className='text-sm '>{description}</p>}
      </div>
    </div>
  );
}


