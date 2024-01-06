import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
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
            <RiMenu3Fill size='35' className='text-white' />
          </DropdownMenuTrigger>

          
          <DropdownMenuContent >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
         
        </DropdownMenu>
      </div>
    </>
  );
}
