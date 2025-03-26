import { FC } from "react";

interface FilterToggleProps {
  onClick: () => void;
  isActive: boolean;
  filterName: string;
}

const FilterToggle: FC<FilterToggleProps> = ({
  onClick,
  isActive,
  filterName,
}) => {
  return (
    <>
      {" "}
      <div
        className={`w-full p-1  items-center justify-center rounded-md cursor-pointer ${
          isActive ? " bg-black text-white" : "bg-gray-200 text-black"
        }`}
        onClick={onClick}
      >
        <h3 className="font-semibold text-center text-lg">{filterName}</h3>
      </div>
    </>
  );
};

export default FilterToggle;
