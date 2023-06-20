import { ChangeEvent, FC, useState } from "react";

interface TextAreaProps {
  question: string;
  description: string | "";
  label: string;
  value: any;
  placeholder: string | "";
}

const TextArea: FC<TextAreaProps> = ({
  question,
  description,
  label,
  value,
  placeholder,
}) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className=" text-sm font-semibold">
        {question}
      </label>
      <span className="text-xs text-slate-400">{description}</span>
      <textarea
        className=" shadow h-20 rounded-md focus:ring-0 p-4 mb-4"
        id={label}
        value={textAreaValue}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          const value = event.target.value;
          setTextAreaValue(value);
        }}
      />
    </div>
  );
};

export default TextArea;
