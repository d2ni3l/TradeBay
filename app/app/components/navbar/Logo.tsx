'use client'

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { lemon } from '@/app/layout'
export default function Logo({textColor, hideSmallScreen} : {textColor? : string, hideSmallScreen? : boolean}) {
  const router = useRouter()
  return (
    <div className='flex items-center gap-1 cursor-pointer' onClick={() => {router.push('/')}}>
      <Image  src='/images/logo.svg' width='40' className='w-[60px] h-[60px]' height='40' alt='Trade Bay Logo'/>
      <h2 className={` ${hideSmallScreen && 'hidden md:block'} font-bold ${textColor ? textColor : 'text-[#4c4c4c]'} ${lemon.className} `}>Trade Bay</h2>
    </div>
  )
}
