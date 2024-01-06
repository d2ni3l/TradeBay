import React from "react";
import Logo from "./Logo";
import Search from "../search/Search";
import MenuBar from "./MenuBar";
import Container from "../Container";
export default function Navbar() {
  return (
    <nav className='bg-[#3adbb9]'>
     <Container>
     <div className=''>
        <div className='py-2'></div>

        <div className='flex justify-between items-center'>
            <div></div>
          <Logo />

          <MenuBar />
        </div>

        <div className='pt-2 '></div>
        <Search />
        <div className='pb-3'></div>
      </div>
     </Container>
    </nav>
  );
}
