import React from "react";
import { Logo } from "../assets";
import SearchBar from "./SearchBar";
import SideMenu from "./SideMenu";

const Sidebar = () => {
  return (
    <div className="p-3 border-r-xsm border-gray_400">
      <div className="p-3">
        <img src={Logo} className="" alt="Logo" />
      </div>
      <div className="p-3">
        <SearchBar />
      </div>
      <div className="p-3">
        <SideMenu />
      </div>
    </div>
  );
};

export default Sidebar;
