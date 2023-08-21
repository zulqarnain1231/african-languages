import React from "react";

interface Props {
  type?: string;
  value: any;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  placeholder: string;
  name: string;
  required?: boolean;
}
const TextInput: React.FC<Props> = ({
  type = "text",
  value,
  setValue,
  icon,
  placeholder,
  name,
  required = true,
}) => {
  return (
    <div className="rounded-3 bg-white input px-4">
      {icon}
      <input
        type={type}
        value={value}
        name={name}
        onChange={setValue}
        className="w-100 h-100 bg-transparent border-none px-3"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextInput;