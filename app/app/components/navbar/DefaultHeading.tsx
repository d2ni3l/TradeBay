import React from "react";
import Logo from "./Logo";
import { RiMenu3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DefaultHeadingNavmenu = ["Privacy policy", "Terms", "Login", "Sign up"];
export default function () {
  return (
    <header className='lg:flex  justify-center pt-3 bg-[#ff85a2] '>
      <nav className='flex justify-between lg:max-w-xl px-5 lg:px-0 gap-10 items-center w-full'>
        <Logo hideSmallScreen={false} textColor='text-white' />

        <div className='hidden lg:block '>
          <MenuItem />
        </div>

        <div className='block lg:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger className='outline-none'>
              <RiMenu3Fill size={22} className='text-white' />
            </DropdownMenuTrigger>

            <DropdownMenuContent className='mr-3'>
              {DefaultHeadingNavmenu.map((item) => {
                return (
                  <DropdownMenuItem className='font-medium ' key={item}>
                    {item}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}

const MenuItem = () => {
  const router = useRouter();
  return (
    <ul className='flex gap-7'>
      {DefaultHeadingNavmenu.map((item) => {
        return (
          <li
            key={item}
            onClick={() => {
              router.push("/home");
            }}
            className='font-bold hover:text-black cursor-pointer text-white'>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
