
'use client'
import React from "react";
import { User } from "../typesDefinition";
import useCart from "../actions/useCart";

export default  function AddtoCart({ currentUser }: User) {


const {itemInCart, toggleCart} = useCart({articleId: '16828847', currentUser: currentUser})

  return (
    <div
      onClick={
        toggleCart
      }
      className='p-3 bg-red-400 cursor-pointer focus:bg-green-500'>
      {itemInCart() ? 'Item in cart' : 'No Item'}

      
    </div>
  );
}



const Button = () =>  {
  return <>
  <button className='p-2 bg-purple-500 cursor-pointer' onClick={() => {}}>

  </button>
  </>
}