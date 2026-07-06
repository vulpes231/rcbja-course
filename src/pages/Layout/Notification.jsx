import React from "react";
import { motion } from "framer-motion";
import { RiNotification3Fill } from "react-icons/ri";

const Notification = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 8 }}
      whileTap={{ scale: 0.95 }}
      className="relative cursor-pointer"
    >
      <div className="bg-[#f3efff] p-3 rounded-full">
        <RiNotification3Fill className="text-2xl text-[#5162be]" />
      </div>

      <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
    </motion.div>
  );
};

export default Notification;
