import { FaSearch } from "react-icons/fa";


export const SearchBar = () => {
  return (
    <>
      <div className="relative inline-flex  justify-end border border-gray-200 rounded-md">
        <input
          className="px-2 py-2 focus:outline-0"
          type="text"
          placeholder="Search"
        />
        <label className=" block px-2 py-1" id="search">
          <FaSearch className="w-full h-full" />
        </label>
      </div>
    </>
  );
};
