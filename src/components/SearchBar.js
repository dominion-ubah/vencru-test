import React, { useState } from "react";
import { Search } from "../assets";

const SearchBar = () => {
  const [searchtext, setSearchText] = useState("");
  return (
    <div className="search_container relative">
      <img src={Search} className="absolute left-2.5 top-3" alt="search" />
      <input
        type="search"
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
        className="p-2 pl-10 border-xsm text-xsm border-gray_200 shadow-shadow_100 rounded-lg placeholder:text-gray_100 placeholder:text-xsm "
      />
    </div>
  );
};

export default SearchBar;
