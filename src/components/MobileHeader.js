import React from "react";
import {
  MobileMenu,
  Logo,
} from "../assets";

const MobileHeader = () => {
  return (
    <div className="block md:hidden flex bg-white border-b-xsm w-screen p-4">
      <img src={Logo} className="" alt="Logo" />
      <img src={MobileMenu} className="ml-auto" alt="Logo" />
      
    </div>
  );
};

export default MobileHeader;
