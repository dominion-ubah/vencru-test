import React from "react";
import { Person, Exit } from "../assets";

const ProfileDetails = () => {
  
  return (
    <div className="flex py-4 mt-5 border-t-xsm border-gray_400" >
      <img src={Person} className="pr-4" alt="person" />
      <span className=" flex-1 ">
        <h4 className="text-xxsm_bold text-black_100 py-1">Olivia Rhye</h4>
        <p className="text-xxsm text-gray_100 pb-4">olivia@untitledui.com</p>
      </span>
      <img src={Exit} className="pr-4" alt="exit" />
    </div>
  );
};

export default ProfileDetails;
