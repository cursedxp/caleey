import { FC, useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
//add colors
//list colors
//set current color by default its blue
const colors = [
  "bg-violet-500",
  "bg-pink-500",
  "bg-lime-500",
  "bg-indigo-500",
  "bg-orange-500",
  "bg-sky-500",
  "bg-fuchsia-500",
  "bg-green-500",
  "bg-rose-500",
  "bg-blue-500",
];

const ColorSelect: FC = () => {
  const [currentColor, setCurrentColor] = useState<string>("bg-blue-500");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleClick = (color: string): void => {
    setCurrentColor(color); // Update the current color
    setSelectedColor(color); // Update the selected color
  };

  const colorBoxes = colors.map((color: string) => {
    const isSelected = color === selectedColor; // Check if the color is selected
    return (
      <li
        className={`w-8 h-8 rounded-md shadow hover:cursor-pointer ${color} transition-transform duration-200  hover:scale-110 ${
          isSelected ? "border-2 border-blue-500" : "" // Add border classes when selected
        }`}
        key={uuidv4()}
        onClick={(event: React.MouseEvent<HTMLLIElement>) => {
          handleClick(color); // Call handleClick with the clicked color
        }}
      ></li>
    );
  });

  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor="" className=" text-sm font-semibold">
        Select color
      </label>
      <span className="text-xs text-slate-400">
        Select a color that represents the theme or nature of your event, adding
        visual context.
      </span>
      <ul className="color-select flex gap-2 mt-1">{colorBoxes}</ul>
    </div>
  );
};

export default ColorSelect;
