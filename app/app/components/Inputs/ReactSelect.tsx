"use client";

import React, { useState } from "react";
import Select from "react-select";

type OptionType = { value: string | number; label: string | number }[];
type OptionsType = Array<OptionType>;
type ValueType = OptionType | OptionsType | null | void;

interface ReactSelectInterface {
  options: {label: string; value: string;}[];
  setState: React.Dispatch<React.SetStateAction<any>>;
  focusedStateStyle: string
  unFocusedStateStyle: string
  placeholder: string
}
export default function ReactSelect({
  options,
  focusedStateStyle,
  unFocusedStateStyle,
  placeholder,
  setState,
}: ReactSelectInterface) {
  return (
    <div>
      <Select
      // @ts-ignore
        options={options}
        onChange={(choice) => {
          setState(choice);
        }}
        classNames={{
          control: (state) =>
            state.isFocused ? focusedStateStyle : unFocusedStateStyle,
        }}
        placeholder={placeholder}
      />
    </div>
  );
}
