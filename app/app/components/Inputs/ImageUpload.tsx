"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { TbPhotoPlus } from "react-icons/tb";
import Button from "../Button";
import { FaCloudUploadAlt } from "react-icons/fa";

interface ImageUploadProps {
  onChange: (value: string) => void;
}

export default function ImageUpload({ onChange }: ImageUploadProps) {
  const uploadPreset = "zvqymuhu";

  const handleUpload = useCallback(
    (result: any, widget: any) => {
      toast("You can upload multiple images", {
        duration: 2000,
        icon: "👌",
      });
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  return (
    <>
      <CldUploadWidget
        onSuccess={(result, { widget }) => {
          handleUpload(result, widget);
        }}
        uploadPreset={uploadPreset}>
        {({ open }) => {
          return (
            <Button
              className='rounded-md px-2  flex justify-center items-center gap-2 py-2'
              label='Upload Image'
              iconSize={24}
              icon={FaCloudUploadAlt}
              onClick={() => open?.()}
            />
          );
        }}
      </CldUploadWidget>
    </>
  );
}
