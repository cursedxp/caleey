import { ChangeEvent, FC, useState } from "react";

interface InputProps {
  question: string;
  description: string | "";
  label: string;
  placeholder: string | "";
  onChange: (value: string) => void | "";
}

const InputField: FC<InputProps> = ({
  question,
  description,
  label,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className=" text-sm font-semibold">
        {question}
      </label>
      <span className="text-xs text-slate-400">{description}</span>
      <input
        type="text"
        className=" shadow h-10 rounded-md focus:ring-0 p-4 mb-4"
        id={label}
        value={inputValue}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          setInputValue(value);
        }}
      />
    </div>
  );
};

export default InputField;
