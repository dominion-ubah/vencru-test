import React from "react";
import { VideoWrap } from "../assets";

const NewFeatures = () => {
  return (
    <div className="my-5 p-5 bg-lightgray_200 rounded-lg">
      <div className="py-1">
        <h4 className="text-xxsm_bold text-black_100 py-1"> New features available! </h4>
        <p className="text-xxsm text-gray_100 pb-4"> Check out the new dashboard view. Pages now load faster. </p>
        <img src={VideoWrap} className="cursor-grab" alt="video" />
      </div>
      <div className="flex pt-3">
        <span className="text-xxsm text-gray_100 pb-4 pr-3" >Dismiss</span>
        <span className="text-xxsm text-purple_100 pb-4">What's New?</span>
      </div>
    </div>
  );
};

export default NewFeatures;
