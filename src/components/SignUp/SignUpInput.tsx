import React from "react";

interface SignUpInputProps {
  placeholder: string;
  title: string;
}

const SignUpInput = ({ placeholder, title }: SignUpInputProps) => {
  return (
    <div className="flex justify-between w-full items-center pl-16">
      <div>{title}</div>
      <input
        placeholder={placeholder}
        className="outline-none border font-medium border-main-color w-3/4 text-sm rounded-full py-3 pl-7 mb-[5px]"
      />
    </div>
  );
};

export default SignUpInput;
