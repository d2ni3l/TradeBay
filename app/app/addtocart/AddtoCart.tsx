
'use client'

import axios from 'axios'
import React from 'react'

export default function AddtoCart() {
  return (
    <div onClick={() => {axios.post('/api/getcart')}} className='p-3 bg-red-400 cursor-pointer focus:bg-green-500'>
        Hello add to cart 
    </div>
  )
}
