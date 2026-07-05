import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const ProfileDropDown = () => {
  return (
    <div className="flex items-start gap-1">
      <span>
        <BiSolidUserCircle className="text-4xl" />
      </span>
      <span>
        <h3 className="font-semibold">Briyenne Duterne</h3>
        <small className="text-slate-500">Active</small>
      </span>
    </div>
  );
};

export default ProfileDropDown;
