"use client";

import axios from "axios";
import React from "react";
import prisma from "@/lib/prismadb";
import { User } from "../typesDefinition";
import useCart from "../actions/useCart";
import randFunction from "../randFunction";

export default async function AddtoCart({ currentUser }: User) {


const {itemInCart, toggleCart} = useCart({articleId: '', currentUser: currentUser})


// const  {boh, nah} = randFunction({user: 'id', id: 'user'})
 
  // const { itemInCart, toggleCart } = useCart({'id', currentUser});



  const getCart = await prisma.article.findMany({
    where: {
      id: {
        in: [...(currentUser?.favoriteIds || [])],
      },
    },
  });

  console.log(getCart);

  return (
    <div
      onClick={() => {
        axios.post("/api/addtocart/12345");
      }}
      className='p-3 bg-red-400 cursor-pointer focus:bg-green-500'>
      Hello add to cart
    </div>
  );
}
