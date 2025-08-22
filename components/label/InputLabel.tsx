import React from "react";

type InputLabelProps = {
   children: React.ReactNode;
   labelFor: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const InputLabel = ({ children, labelFor }: InputLabelProps) => {
   return (
      <label htmlFor={labelFor} className="text-gray-400 mb-1 text-sm">
         {children}
      </label>
   );
};

export default InputLabel;
