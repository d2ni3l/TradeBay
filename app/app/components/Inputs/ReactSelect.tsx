'use client'

import React, { useState } from 'react'
import Select from 'react-select'

type OptionType =  {value: string | number; label: string | number; }[]
type OptionsType = Array<OptionType>
 type ValueType = OptionType | OptionsType | null | void

interface ReactSelectInterface {
  options: { value: string | number; label: string | number; }[]
  setValues: (choice: { value: string | number; label: string | number; }) => void
}
export default function ReactSelect({options,setValues }: ReactSelectInterface) {


  const  [value, setValue] = useState<{ value: string | number; label: string | number; } | null>()
  console.log(value)

  
  return (
    <div>
      <Select 
      options={options}
      // onChange={(choice) => setValues(choice)}
      />
    </div>
  )
}
// find a way to pass react select value to postarticlemodal