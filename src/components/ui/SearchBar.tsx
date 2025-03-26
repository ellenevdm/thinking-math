import { FC } from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchQuery: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  setSearchQuery,
}) => {
  return (
    <form className=" form relative">
      <button
        onClick={() =>
          onSearchChange({
            target: { value: "" },
          } as React.ChangeEvent<HTMLInputElement>)
        }
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        SI
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchChange}
        className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
      />
      <button
        type="button"
        className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
        onClick={() => setSearchQuery("")}
      >
        X
      </button>
    </form>
  );
};

export default SearchBar;
