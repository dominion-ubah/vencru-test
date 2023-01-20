import React from "react";
import { menuList, menuSubList } from "../utils/data";
import MenuItem from "./MenuItem";
import NewFeatures from "./NewFeatures";
import ProfileDetails from "./ProfileDetails";

const SideMenu = () => {
  return (
    <div className="menu_container">
      {menuList.map(menuItem => (
        <MenuItem menuItem={menuItem} />
      ))}
      <div className="pt-5">
      {menuSubList.map(menuItem => (
        <MenuItem menuItem={menuItem} />
      ))}
      <NewFeatures />

      <ProfileDetails />
      </div>
    </div>
  );
};

export default SideMenu;
