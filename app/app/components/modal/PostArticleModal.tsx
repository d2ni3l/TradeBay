'use client'

import React, { useState } from "react";
import Modal from "./Modal";

export default function PostArticleModal() {

    const [open, setOpen] = useState(true)
  return (
    <>
      <Modal
        open={open}
        title='Post Article'
        description='Best place online to sell things'
        closeModal={() => {setOpen((prev) => prev = false); console.log('closed modal')}}
        
      />
    </>
  );
}
