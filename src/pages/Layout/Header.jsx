import React, { useState } from "react";
import { motion } from "framer-motion";
import ProfileDropDown from "./ProfileDropDown";
import Notification from "./Notification";
import { logo } from "../../assets";
import { MdClose, MdMenu } from "react-icons/md";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm"
    >
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="text-xl font-bold text-[#5162be]">RBCJA</h1>
        </motion.div>

        <div className="flex gap-6 items-center">
          <Notification />
          <ProfileDropDown />
          <span
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden "
          >
            {isMenuOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
          </span>
        </div>
        {isMenuOpen && <MobileNav />}
      </nav>
    </motion.header>
  );
};

export default Header;
