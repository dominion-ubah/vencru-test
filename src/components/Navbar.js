import React from "react";
import { menuSettingsList } from "../utils/data";

const Navbar = () => {
  
  return (
    <div className="container navbar-container w-screen overflow-x-auto">
    <ul className="flex my-5 border-2 w-auto">
      {menuSettingsList.map((menuItem) => (
        <li className="px-4 min-w-max py-2 border-gray_200 border-b-xsm border-t-xsm border-r-xsm text-xxsm_bold bg-white text-gray_300 first-of-type:rounded-l-md first-of-type:border-l-xsm last-of-type:rounded-r-md">
          {menuItem.name}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Navbar;