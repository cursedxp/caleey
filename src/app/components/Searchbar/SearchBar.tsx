import { useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  const [searchText, setSearchText] = useState();

  return (
    <div className="search shadow-md rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <label className="flex items-center">
        <MagnifyingGlassIcon className="w-6 h-6 inline-block mx-2 text-slate-700" />
        <input
          type="search"
          className="flex-grow h-10 rounded-md focus:ring-0 p-4"
          placeholder="Quick search..."
          style={{ outline: "none" }}
          value={searchText}
        />
      </label>
    </div>
  );
}
