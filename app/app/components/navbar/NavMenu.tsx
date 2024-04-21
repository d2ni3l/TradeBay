"use client";

import React from "react";
import Button from "../Button";
import { FaPlus } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { lemon } from "@/app/font";
import postArticleModal from "@/app/hooks/postArticleModal";
import { User } from "@/app/typesDefinition";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { MdLogin, MdLogout } from "react-icons/md";
import { signOut } from "next-auth/react";
export default function NavMenu({ currentUser }: User) {
  console.log(currentUser);

  const openModal = postArticleModal((state) => state.openModal);

  const router = useRouter();
  return (
    <div className='flex justify-center gap-3'>
      <Button
        onClick={() => {
          openModal();
        }}
        className='bg-white border border-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center  text-gray-600'
        iconSize={16}
        icon={FaPlus}
      />

      <DropdownMenu>
        {/* Account button */}
        <DropdownMenuTrigger className='outline-none'>
          <Button
            className='bg-white border border-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center  text-gray-600'
            iconSize={16}
            icon={IoMdPerson}
          />
        </DropdownMenuTrigger>

        {currentUser?.email ? (
          <DropdownMenuContent>
            <DropdownMenuLabel className='flex gap-2 items-center'>
              <p>My Cart</p> <FaCartShopping className='text-black' />{" "}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <p
                onClick={() => {
                  router.push("/privacy-policy");
                }}>
                Privacy Policy
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <p
                onClick={() => {
                  router.push("/terms");
                }}>
                Terms
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                signOut();
              }}
              className='flex gap-2 items-center'>
              <p>Logout</p> <MdLogout className='text-red-500' />
            </DropdownMenuItem>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => router.push("/login")}
              className='flex  items-center flex-col'>
              <p className='font-bold text-center '>
                You are not logged into TradeBay
              </p>
              <span className='flex items-center gap-1  text-bold font-bold outline rounded-full px-3 py-2 mt-2'>
                <span>
                  <span className={lemon.className}>Login</span>
                </span>{" "}
                <MdLogin className='text-green-500 text-xl ' />
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>

      <Button
        className={`relative flex h-[40px] rounded-full w-[120px]  items-center justify-center overflow-hidden bg-[#fb0066] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-800 before:duration-500 before:ease-out hover:shadow-gray-800 hover:before:h-56 hover:before:w-56 ${lemon.className}`}
        labelClassName='relative z-10 text-xs'
        label='Add Product'
      />
    </div>
  );
}
