import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function MenuBar() {
  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className='outline-none'>
            {" "}
            <RiMenu3Fill size={22} className='text-white' />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel className='flex gap-2 items-center'>
              <p>My Cart</p> <FaCartShopping className='text-black' />{" "}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>lorem</DropdownMenuItem>
            <DropdownMenuItem>lorem</DropdownMenuItem>
            <DropdownMenuLabel className='flex gap-2 items-center'>
              <p>Logout</p> <MdLogout className='text-red-500' />{" "}
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
