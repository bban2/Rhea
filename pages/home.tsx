import CustomCollapse from "@components/collapse/BasicCollpase";
import CustomMenu from "@components/dropdown/BasicDropdown";
import CustomModal from "@components/modal/BasicModal";
import CustomRadioGroup from "@components/input/radio/RadioGroup";
import CustomSwitch from "@components/switch/BasicSwitch";
import CustomTab from "@components/tab/BasicTab";
import React from "react";
import CustomSelect from "@components/select/BasicSelect";

const home = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <CustomSwitch />
        </div>
        <div className="col-span-4">
          <CustomMenu />
        </div>
        <div className="col-span-4">
          <CustomSelect />
        </div>
        <div className="col-span-4">
          <CustomModal />
        </div>
        <div className="col-span-4">
          <CustomCollapse />
        </div>
        <div className="col-span-4">
          <CustomTab />
        </div>
        <div className="col-span-4">
          <CustomRadioGroup />
        </div>
      </div>
    </div>
  );
};

export default home;
