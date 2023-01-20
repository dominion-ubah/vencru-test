import React from "react";

const MenuItem = ({ menuItem }) => {
  const { name, icon, count, isActive } = menuItem;

  return (
    <div
      key={name}
      className={
        isActive
          ? "flex py-3 cursor-pointer bg-lightgray_200 py-3 rounded-lg"
          : "flex py-3 cursor-pointer "
      }
    >
      <img src={icon} className="pr-4" alt={name} />
      <span
        className={
          isActive
            ? "flex-1 text-xsm_bold text-black_100"
            : " flex-1 text-xsm_bold text-gray_300"
        }
      >
        {name}
      </span>
      {count !== 0 && (
        <span className="pr bg-lightgray_100 text-gray_300 px-3 rounded-2xl">
          {count}
        </span>
      )}
    </div>
  );
};

export default MenuItem;
