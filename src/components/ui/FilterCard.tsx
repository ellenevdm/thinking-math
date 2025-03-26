import { FC, useState } from "react";

interface FilterCardProps<> {
  dataId: string;
  id: string;
  name: string;
  onClick: (categoryId: string) => void;
  isActive: (categoryId: string) => boolean | undefined;
}

const FilterCard: FC<FilterCardProps> = ({
  isActive,
  onClick,
  name,
  id,
  dataId,
}) => {
  return (
    <div
      data-testid={dataId}
      onClick={() => onClick(id)}
      className={`border border-gray-200 flex flex-col gap-2 items-center p-1 shadow-sm rounded-xl cursor-pointer ${
        isActive(id) ? "bg-gray-200" : ""
      }`}
    >
      <div className="flex justify-center items-center gap-1 *:">
        <p
          className={`text-center text-xs ${
            isActive(id) ? "font-semibold" : ""
          }`}
        >
          {name}
        </p>
        {isActive(id) && (
          <span className="font-semibold text-xs text-gray-800 hover:text-md">
            x
          </span>
        )}
      </div>
    </div>
  );
};

export default FilterCard;
