import React from "react";
import CardDetails from "../components/CardDetails";
import ContactEmail from "../components/ContactEmail";
import MobileHeader from "../components/MobileHeader";
import Navbar from "../components/Navbar";
import PageSubTitle from "../components/PageSubTitle";
import PageSubTitleWithAction from "../components/PageSubTitleWithAction";
import PageTitle from "../components/PageTitle";
import Table from "../components/Table";

const Settings = () => {
  return (
    <>
      <MobileHeader />
      <div className="p-5 bg-lightgray_200">
        <PageTitle
          title={"Settings"}
          subtitle={"Manage your team and preferences here."}
        />

        <Navbar />

        <PageSubTitle
          title={"Payment method "}
          subtitle={"Update your billing details and address."}
        />

        <div className="settings_payment_method">
          <ContactEmail />
          <CardDetails />
        </div>

        <div className="settings_billing_table py-5">
          <PageSubTitleWithAction
            title={"Billing history"}
            actionTitle={"Download all "}
          />
          <Table />
        </div>
      </div>
    </>
  );
};

export default Settings;
