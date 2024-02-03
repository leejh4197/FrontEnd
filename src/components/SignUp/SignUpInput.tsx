import React, { ChangeEvent } from "react";

interface SignUpInputProps {
  placeholder: string;
  title: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SignUpInput = ({
  placeholder,
  title,
  onChange,
  name,
}: SignUpInputProps) => {
  return (
    <div className="flex justify-between w-full items-center pl-16 relative">
      <div>{title}</div>
      <input
        placeholder={placeholder}
        className="outline-none border font-medium border-main-color w-3/4 text-sm rounded-full py-3 pl-7 mb-[5px]"
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default SignUpInput;
