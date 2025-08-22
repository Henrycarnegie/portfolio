import React from "react";

type TextInputProps = {
   id: string;
   name: string;
   placeholder: string;
   error?: string;
   textArea?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> &
   React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextInput = ({
   id,
   name,
   placeholder,
   error,
   textArea = false,
   ...props
}: TextInputProps) => {
   return (
      <>
         {textArea ? (
            <textarea
               id={id}
               name={name}
               placeholder={placeholder}
               required
               className={`bg-gray-900 text-gray-200 border w-full placeholder:text-sm ${
                  error
                     ? "border-red-500 focus:ring-red-500"
                     : "border-gray-600 focus:ring-pink-500"
               } rounded-lg px-3 py-2 focus:outline-none focus:ring-2`}
               {...props}
            />
         ) : (
            <input
               type="text"
               id={id}
               name={name}
               placeholder={placeholder}
               required
               className={`bg-gray-900 text-gray-200 border w-full placeholder:text-sm ${
                  error
                     ? "border-red-500 focus:ring-red-500"
                     : "border-gray-600 focus:ring-pink-500"
               } rounded-lg px-3 py-2 focus:outline-none focus:ring-2`}
               {...props}
            />
         )}
         {error && <span className="text-xs text-red-500">{error}</span>}
      </>
   );
};

export default TextInput;
