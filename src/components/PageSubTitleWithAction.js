import React from "react";
import { Download } from "../assets";

const PageSubTitleWithAction = ({ title, actionTitle }) => {
  return (
    <div className="flex py-5">
      <h4 className="text-xmd_bold text-black_100 flex-1">{title}</h4>
      <div className="mr-5 md:mr-0 p-2 border-xsm bg-white cursor-pointer pr-5 rounded-md border-gray_200 flex">
        <img src={Download} className="pl-2" alt="download" />
        <span className="pl-3 text-xxsm_bold text-gray_300">{actionTitle}</span>
      </div>
    </div>
  );
};

export default PageSubTitleWithAction;
