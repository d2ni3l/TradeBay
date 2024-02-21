"use client";

import React from "react";

import RegisterBox from "./RegisterBox";
import Navbar from "../components/navbar/Navbar";

export default function page() {
  return (
    <>
    <Navbar/>
      <main className='flex justify-center items-center w-full '>
        <RegisterBox />
      </main>
    </>
  );
}
