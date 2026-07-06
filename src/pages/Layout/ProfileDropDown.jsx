import React from "react";
import { motion } from "framer-motion";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";

const ProfileDropDown = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-3 bg-[#f6f3ff] px-3 py-2 rounded-2xl cursor-pointer border border-[#e4dcff]"
    >
      <div className="bg-white p-1 rounded-full shadow-sm">
        <BiSolidUserCircle className="text-4xl text-[#5162be]" />
      </div>

      <div className="leading-tight hidden md:block">
        <h3 className="font-semibold text-slate-800 text-sm">
          Briyene Duterne
        </h3>
        <small className="text-[#5162be] font-medium">Active</small>
      </div>

      <IoChevronDown className="text-slate-500 text-sm" />
    </motion.div>
  );
};

export default ProfileDropDown;
