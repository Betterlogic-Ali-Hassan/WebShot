import { brushData } from "@/constant/PencilData";
import React from "react";
interface Props {
  onClick: (icon: React.ReactNode) => void;
}
const Brush = ({ onClick }: Props) => {
  return (
    <>
      <ul className='flex  items-center gap-2 w-full px-4'>
        {brushData.map((item, index) => (
          <li
            key={index}
            className='flex items-center gap-3 rounded-md py-2 px-3 border-2 border-dotted hover:bg-light cursor-pointer text-sm'
            onClick={() => onClick(item.icon)}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Brush;