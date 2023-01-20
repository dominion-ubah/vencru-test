import React from "react";
import {
  Download,
  DownArr,
  Done,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
} from "../assets";

const Table = () => {
  return (
    <div className="w-screen md:w-full overflow-x-auto settings_billing_table">
      <div className="border-xsm rounded-md shadow-shadow_200 w-max md:w-full">
        <div className="table_head grid border-b-xsm grid-cols-12">
          <div className="col-span-4 p-2 flex text-xxxsm_bold text-gray_100">
            <input type="checkbox" className="align-text-top mx-2" /> Invoice{" "}
            <img src={DownArr} className="pl-1 w-4" alt="arrow" />
          </div>
          <div className="col-span-2 p-2 text-xxxsm_bold text-gray_100">
            Amount
          </div>
          <div className="col-span-2 p-2 text-xxxsm_bold text-gray_100">
            Date
          </div>
          <div className="col-span-1 p-2 text-xxxsm_bold text-gray_100">
            Status
          </div>
          <div className="col-span-2 p-2 text-xxxsm_bold text-gray_100">
            Users on plan
          </div>
          <div className="col-span-1 p-2 text-xxxsm_bold text-gray_100"></div>
        </div>

        <div className="table_body grid border-b-xsm grid-cols-12 bg-white">
          <div className="col-span-4 p-2 text-xxsm_bold text-black_100  flex align-middle">
            <input type="checkbox" className="align-text-top mx-2" />
            <div className="py-3">Basic Plan – Dec 2022</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100 ">
            <div className="py-3">USD $10.00</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100 ">
            <div className="py-3">Dec 1, 2022</div>
          </div>
          <div className="col-span-1 p-2 text-xxxsm_bold ">
            <span className="tag flex text-green_200 bg-green-100 rounded-lg w-14 px-1.5 mt-3">
              <img src={Done} alt="tick" className="pr-1" />
              Paid
            </span>
          </div>
          <div className="col-span-2 p-2">
            <img src={Avatar1} className="pt-3" alt="" />
          </div>
          <div className="col-span-1 p-2">
            <img src={Download} className="pt-3 pr-5 ml-auto" alt="" />
          </div>
        </div>
        <div className="table_body grid border-b-xsm grid-cols-12 bg-white">
          <div className="col-span-4 p-2 text-xxsm_bold text-black_100  flex align-middle">
            <input type="checkbox" className="align-text-top mx-2" />
            <div className="py-3">Basic Plan – Dec 2022</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100 ">
            <div className="py-3">USD $10.00</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100">
            <div className="py-3">Dec 1, 2022</div>
          </div>
          <div className="col-span-1 p-2 text-xxxsm_bold ">
            <span className="tag flex text-green_200 bg-green-100 rounded-lg w-14 px-1.5 mt-3">
              <img src={Done} alt="tick" className="pr-1" />
              Paid
            </span>
          </div>
          <div className="col-span-2 p-2">
            <img src={Avatar2} className="pt-3" alt="" />
          </div>
          <div className="col-span-1 p-2">
            <img src={Download} className="pt-3 pr-5 ml-auto" alt="" />
          </div>
        </div>
        <div className="table_body grid border-b-xsm grid-cols-12 bg-white">
          <div className="col-span-4 p-2 text-xxsm_bold text-black_100  flex align-middle">
            <input type="checkbox" className="align-text-top mx-2" />
            <div className="py-3">Basic Plan – Dec 2022</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100 ">
            <div className="py-3">USD $10.00</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100 ">
            <div className="py-3">Dec 1, 2022</div>
          </div>
          <div className="col-span-1 p-2 text-xxxsm_bold ">
            <span className="tag flex text-green_200 bg-green-100 rounded-lg w-14 px-1.5 mt-3">
              <img src={Done} alt="tick" className="pr-1" />
              Paid
            </span>
          </div>
          <div className="col-span-2 p-2">
            <img src={Avatar3} className="pt-3" alt="" />
          </div>
          <div className="col-span-1 p-2">
            <img src={Download} className="pt-3 pr-5 ml-auto" alt="" />
          </div>
        </div>
        <div className="table_body grid border-b-xsm grid-cols-12 bg-white">
          <div className="col-span-4 p-2 text-xxsm_bold text-black_100  flex align-middle">
            <input type="checkbox" className="align-text-top mx-2" />
            <div className="py-3">Basic Plan – Dec 2022</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100 ">
            <div className="py-3">USD $10.00</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100 ">
            <div className="py-3">Dec 1, 2022</div>
          </div>
          <div className="col-span-1 p-2 text-xxxsm_bold bg-white ">
            <span className="tag flex text-green_200 bg-green-100 rounded-lg w-14 px-1.5 mt-3">
              <img src={Done} alt="tick" className="pr-1" />
              Paid
            </span>
          </div>
          <div className="col-span-2 p-2 bg-white">
            <img src={Avatar4} className="pt-3" alt="" />
          </div>
          <div className="col-span-1 p-2">
            <img src={Download} className="pt-3 pr-5 ml-auto" alt="" />
          </div>
        </div>
        <div className="table_body grid border-b-xsm grid-cols-12 bg-white">
          <div className="col-span-4 p-2 text-xxsm_bold text-black_100  flex align-middle">
            <input type="checkbox" className="align-text-top mx-2" />
            <div className="py-3">Basic Plan – Dec 2022</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100 ">
            <div className="py-3">USD $10.00</div>
          </div>
          <div className="col-span-2 p-2 text-xxsm_bold text-gray_100 ">
            <div className="py-3">Dec 1, 2022</div>
          </div>
          <div className="col-span-1 p-2 text-xxxsm_bold ">
            <span className="tag flex text-green_200 bg-green-100 rounded-lg w-14 px-1.5 mt-3">
              <img src={Done} alt="tick" className="pr-1" />
              Paid
            </span>
          </div>
          <div className="col-span-2 p-2">
            <img src={Avatar5} className="pt-3" alt="" />
          </div>
          <div className="col-span-1 p-2">
            <img src={Download} className="pt-3 pr-5 ml-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
