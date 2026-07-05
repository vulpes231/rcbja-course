import React from "react";
import ProfileDropDown from "./ProfileDropDown";
import Notification from "./Notification";
import { logo } from "../../assets";

const Header = () => {
  return (
    <header className="w-screen bg-white fixed top-0 shadow-sm">
      <nav className="flex justify-between items-center p-4">
        <img src={logo} alt="" className="w-16" />
        <div className="flex gap-6 items-start">
          <Notification />
          <ProfileDropDown />
        </div>
      </nav>
    </header>
  );
};

export default Header;
