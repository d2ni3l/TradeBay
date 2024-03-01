import React from "react";
import Logo from "./Logo";
import { RiMenu3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DefaultHeadingNavmenu = [
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },

  {
    label: "Terms",
    link: "/terms",
  },

  {
    label: "Login",
    link: "/login",
  },

  {
    label: "Sign Up",
    link: "/signup",
  },

  
];
export default function () {
  const router = useRouter();
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
                  <DropdownMenuItem
                    onClick={() => {
                      router.push(item.link);
                    }}
                    className='font-medium '
                    key={item.label}>
                    {item.label}
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
            key={item.label}
            onClick={() => {
              router.push(item.link);
            }}
            className='font-bold hover:text-black cursor-pointer text-white'>
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};
