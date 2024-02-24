import React from "react";
import Logo from "./Logo";
import Search from "../search/Search";
import MenuBar from "./MenuBar";
import Container from "../Container";
import { Separator } from "@/components/ui/separator";
import NavMenu from "./NavMenu";
export default function Navbar() {
  return (
    <nav className='bg-[#3adbb9] md:bg-white'>
     <Container>
     <div className='md:flex justify-between md:pt-3 md:items-center'>
        <div className='py-2 md:hidden'></div>

        <div className='flex justify-between items-center'>
            <div className='md:hidden'></div>
          <Logo hideSmallScreen />

          <div className="md:hidden">
          <MenuBar />
          </div>
        </div>

        <div className='pt-2 md:hidden'></div>
        <Search />

        <div className="hidden md:block">
          <NavMenu/>
        </div>
        <div className='pb-3 md:hidden'></div>
      </div>
     </Container>
     <Separator className="my-4" />
    </nav>
  );
}
