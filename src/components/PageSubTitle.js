import React from "react";

const PageSubTitle = ({title, subtitle}) => {
  
  return (
    <div className="mini_title-container py-5">
    <h4 className="text-xmd_bold text-black_100">{title}</h4>
    <p className="text-xxsm text-gray_100">{subtitle}</p>
  </div>
  );
};

export default PageSubTitle;