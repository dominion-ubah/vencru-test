import React from "react";
import {
  CheckCircle,
  CheckTickCircle,
  Visa,
  Mastercard,
  Plus,
} from "../assets";

const CardDetails = () => {
  return (
    <div className="w-11/12 md:w-full grid grid-cols-10 border-t-xsm border-gray_400 py-5">
      <div className="col-span-10 md:col-span-3 pb-3 md:pb-0">
        <h4 className="text-xxsm_bold text-gray_300 "> Card details</h4>
        <p className="text-xxsm text-gray_100">
          Select default payment method.
        </p>
      </div>
      <div className="col-span-10 md:col-span-7">
        <div className="flex bg-purple_300 mb-3 rounded-lg border-xsm border-purple_400 p-4 cursor-pointer">
          <div className="pr-5">
            <img src={Visa} alt="visa" />
          </div>
          <div className="flex-1">
            <p className="text-xxsm_bold text-purple_200">
              Visa ending in 1234
            </p>
            <p className="pb-2 text-xxsm text-purple_100">Expiry 06/2024</p>
            <span className="pr-3 text-xxsm_bold text-purple_100">
              Set as default
            </span>
            <span className="text-xxsm_bold text-purple_200">Edit</span>
          </div>
          <div>
            <img
              src={CheckTickCircle}
              className="pr-3 align-bottom pt-1"
              alt="check"
            />
          </div>
        </div>

        <div className="flex bg-white p-4 border-xsm border-gray_400 rounded-lg cursor-pointer">
          <div className="pr-5">
            <img src={Mastercard} alt="visa" />
          </div>
          <div className="flex-1">
            <p className="text-xxsm_bold text-gray_300">
              Mastercard ending in 1234
            </p>
            <p className="pb-2 text-xxsm text-gray_100">Expiry 06/2024</p>
            <span className="pr-3 text-xxsm_bold text-gray_100">
              Set as default
            </span>
            <span className="text-xxsm_bold text-purple_200">Edit</span>
          </div>
          <div>
            <img
              src={CheckCircle}
              className="pr-3 align-bottom pt-1"
              alt="check"
            />
          </div>
        </div>

        <div className="flex py-5">
          <img src={Plus} className="pr-2" alt="visa" />
          <p className="text-xxsm_bold text-gray_100">Add new payment method</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
