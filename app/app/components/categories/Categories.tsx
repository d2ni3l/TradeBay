"use client";

import React from "react";
import { categoryList } from "./categorieslist";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Categories() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

   const category = searchParams.get("category");
    console.log(category)

    // storing and modifying category selection with query params and then updating UI
  return (
    <div className='flex gap-2 py-3 overflow-x-scroll mx-2 noscrollbar'>
      {categoryList.map((item) => {
        return (
          <div
            key={item.label}
            onClick={() => {
              router.push(`${pathName}/?category=${item.label}`);
            }}
            className={`border-2 px-3 py-2 cursor-pointer rounded-md hover:border-[#000] group transition-all ${
              item.label === searchParams.get("category") ? "border-[#000]" : ""
            }`}>
            <span
              className={`flex gap-1  items-center text-sm  text-[#4c4c4c] group-hover:text-black font-medium ${
                item.label === searchParams.get("category") ? "text-black" : ""
              }`}>
              <item.icon
                size={20}
                className={`group-hover:text-black ${
                  item.label === searchParams.get("category")
                    ? "text-black"
                    : ""
                }`}
              />
              <p
                className={`group-hover:text-black ${
                  item.label === searchParams.get("category")
                    ? "text-black"
                    : ""
                }`}>
                {item.label}
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
}
