"use client";

import React, { useState } from "react";
import Select from "react-select";

type OptionType = { value: string | number; label: string | number }[];
type OptionsType = Array<OptionType>;
type ValueType = OptionType | OptionsType | null | void;

interface ReactSelectInterface {
  options: { value: string | number; label: string | number }[];
  setState: React.Dispatch<React.SetStateAction<any>>;
  focusedStateStyle: string
  unFocusedStateStyle: string
}
export default function ReactSelect({
  options,
  focusedStateStyle,
  unFocusedStateStyle,
  setState,
}: ReactSelectInterface) {
  return (
    <div>
      <Select
        options={options}
        onChange={(choice) => {
          setState(choice);
        }}
        classNames={{
          control: (state) =>
            state.isFocused ? focusedStateStyle : unFocusedStateStyle,
        }}
      />
    </div>
  );
}
