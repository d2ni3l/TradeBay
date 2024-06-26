"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useState } from "react";
import Button from "../Button";
import { MdError } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

interface ImageUploadProps {
  onChange: (value: string[]) => void;
}

export default function ImageUpload({ onChange }: ImageUploadProps) {
  const [successState, setSuccessState] = useState(false);
  const [bgImg, setbgImg] = useState<string>("");

  const [error, setError] = useState(false);
  const uploadPreset = "zvqymuhu";

  const handleUpload = useCallback(
    (results: any, widget: any) => {
      onChange(results.info.secure_url);
      setbgImg(results.info.secure_url);
    },
    [onChange]
  );
  return (
    <>
      <CldUploadWidget
        options={{
          multiple: false,
        }}
        onSuccess={(results, { widget }) => {
          handleUpload(results, widget);
          setSuccessState(true);
        }}
        onError={(error) => {
          setError(false);
        }}
        uploadPreset={uploadPreset}>
        {({ open }) => {
          return (
            <>
              <div
                onClick={() => open?.()}
                className='flex items-center justify-center w-full'>
                <div
                  style={{
                    backgroundImage: `url(${bgImg})` || 'none',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'

                  }}
                  className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>

                  <div className={
                    `flex flex-col items-center justify-center pt-5 pb-6 ${bgImg && 'invisible' } ` 
                  }>
                    <svg
                      className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 16'>
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                      />
                    </svg>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      <span className='font-semibold'>Click to upload</span> or
                      drag and drop
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`${error && "text-red-500"}  ${
                  successState && "text-green-500"
                } flex justify-center pt-2`}>
                <div>
                  {error && (
                    <p className='flex gap-[3px] items-center'>
                      <span>Something went wrong</span>
                      <span>
                        <MdError size='5' />
                      </span>
                    </p>
                  )}
                  {successState && (
                    <p className='flex gap-[3px] items-center'>
                      <span>Image uploaded successfully</span>
                      <span>
                        <FaCircleCheck />
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </>
          );
        }}
      </CldUploadWidget>
    </>
  );
}
