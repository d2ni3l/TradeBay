import React from "react";
import LoginBox from "./LoginBox";
import Navbar from "../components/navbar/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <main className='flex justify-center items-center w-full '>
        <LoginBox />
      </main>
    </>
  );
}
