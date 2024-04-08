"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import Button from "../Button";
import { FaCloudUploadAlt } from "react-icons/fa";

interface ImageUploadProps {
  onChange: (value: string[]) => void;
}

export default function ImageUpload({ onChange }: ImageUploadProps) {
  const uploadPreset = "zvqymuhu";
  


  const handleUpload = useCallback(
    (results: any, widget: any) => {
      
      onChange(results.info.secure_url)
    },
    [onChange]
  );
  return (
    <>
      <CldUploadWidget
      options={{
        multiple: false
      }}
        onSuccess={(results, { widget }) => {
          handleUpload(results, widget);
        }}
        
        uploadPreset={uploadPreset}>
        {({ open }) => {
          return (
            <Button
              className='rounded-md px-2 text-sm  flex justify-center items-center gap-2 py-2'
              label='Upload Image'
              iconSize={20}
              icon={FaCloudUploadAlt}
              onClick={() => open?.()}
            />
          );
        }}
      </CldUploadWidget>
    </>
  );
}
