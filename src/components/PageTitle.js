import React from "react";

const PageTitle = ({title, subtitle}) => {
  
  return (
    <div className="title-container">
        <h3 className="text-xxl_bold text-black_100 py-1">{title}</h3>
        <p className="text-xsm text-gray_100 py-1">{subtitle}</p>
      </div>
  );
};

export default PageTitle;