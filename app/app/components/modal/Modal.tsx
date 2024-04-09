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
      className={`absolute z-[100] bg-black/60 flex justify-center overflow-x-hidden w-full noscrollbar items-center ${
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
          noscrollbar
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

        <div className='flex justify-center gap-10 py-5'>
          {secondaryAction && (
            <Button
              className={`  hover:border-black hover:text-black text-base text-[#4c4c4c]  py-3 w-[70%] border font-medium rounded-full hover:scale-[0.05] bg-white   transition-all`}
              labelClassName=''
              label={secondaryActionLabel}
              onClick={secondaryAction}
            />
          )}
          <Button
            className={`  border-black text-black text-base hover:text-white hover:bg-black  py-3 w-[70%] border font-medium rounded-full hover:scale-[0.99] bg-white   transition-all`}
            labelClassName=''
            label={actionLabel}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
