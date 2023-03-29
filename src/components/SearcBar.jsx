import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

export default function SearchBar() {
  function handleRecipeSearch(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleRecipeSearch} className="relative">
      <input
        className="w-[350px] border-[1px] border-gray-300 rounded-md p-4 focus:outline-none bg-gray-200"
        type="text"
        placeholder="Separate ingredients w/ a comma"
      />
      <button type="submit" className="absolute rounded-r-md inset-y-0 right-0 flex items-center px-4 text-white bg-blue-500 hover:bg-blue-600">
        <SearchIcon className="w-5 h-5" />
      </button>
    </form>
  );
}