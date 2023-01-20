import React, { useState } from "react";
import { CheckCircle, CheckDotCircle, Mail } from "../assets";

const ContactEmail = () => {
  const [emailtext, setEmailText] = useState("");
  return (
    <div className="grid grid-cols-10 border-t-xsm border-gray_400 py-5">
      <div className="col-span-10 md:col-span-3 pb-3 md:pb-0 ">
        <h4 className="text-xxsm_bold text-gray_300">Contact email</h4>
        <p className="text-xxsm text-gray_100">
          Where should invoices be sent?
        </p>
      </div>
      <div className="col-span-10 md:col-span-7">
        <div className="flex">
          <div>
            <img
              src={CheckCircle}
              className="pr-3 align-bottom pt-1"
              alt="check"
            />
          </div>
          <div>
            <h4 className="text-xxsm_bold text-gray_300">
              Send to my account email
            </h4>
            <p className="text-xxsm text-gray_100">olivia@untitledui.com</p>
          </div>
        </div>
        <div className="pt-4 flex">
          <div>
            <img
              src={CheckDotCircle}
              className="pr-3 align-bottom pt-1"
              alt="check"
            />
          </div>
          <div>
            <h4 className="text-xxsm_bold text-gray_300 pb-3">
              Send to an alternative email
            </h4>
            <div className="search_container relative">
              <img src={Mail} className="absolute left-2.5 top-3" alt="mail" />
              <input
                type="email"
                value={emailtext}
                onChange={(e) => setEmailText(e.target.value)}
                placeholder="billing@untitledui.com"
                className="p-2 pl-10 block w-80 border-xsm text-xsm border-gray_200 shadow-shadow_100 rounded-lg placeholder:text-gray_100 placeholder:text-xsm "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEmail;
