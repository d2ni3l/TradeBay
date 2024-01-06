import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className='flex items-center gap-3'>
      <Image src='/images/logo.svg' width='40' height='40' alt='Trade Bay Logo'/>
    </div>
  )
}
