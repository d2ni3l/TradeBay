"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { NotSignInModal } from "@/app/hooks/NotSignInModal";
import Image from "next/image";
export default function NotSignIn() {
  const router = useRouter();

  const closeModal = NotSignInModal((state) => state.closeModal);
  const open = NotSignInModal((state) => state.open);

  const body = (
    <div className='flex justify-center py-6'>
      <Image src='/images/signin.svg' alt='' width='300' height='300' />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        closeModal={() => {
          closeModal();
        }}
        body={body}
        onSubmit={() => {
          router.push("/login");
        }}
        actionLabel='Login'
        title='Not Logged in yet'
        description='To access the full range of feautures and personalize your experience, please log in or create an account'
      />
    </div>
  );
}
