"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { NotSignInModal } from "@/app/hooks/NotSignInModal";
export default function NotSignIn() {
  const router = useRouter();


  const closeModal = NotSignInModal((state) => state.closeModal)
  const open = NotSignInModal((state) => state.open)


  return (
    <div>
      <Modal
        open={open}
        closeModal={() => {
     closeModal()
        }}

        body={
            <div>

               You are not signed in yet
            </div>
        }
        onSubmit={() => {
          router.push("/login");
        }}
        actionLabel='Login'
        title='Not Logged in yet'
        description='Pls login create a new post'
      />
    </div>
  );
}
