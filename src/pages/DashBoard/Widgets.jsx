import React from "react";
import { motion } from "framer-motion";

import { BsBook } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { RiCertificate2Line } from "react-icons/ri";

const Widgets = () => {
  const customWidgets = [
    {
      id: "enrolled",
      label: "Enrolled Courses",
      count: 1,
      icon: <BsBook />,
    },
    {
      id: "active",
      label: "Active Courses",
      count: 0,
      icon: <GrPersonalComputer />,
    },
    {
      id: "completed",
      label: "Completed Courses",
      count: 0,
      icon: <RiCertificate2Line />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {customWidgets.map((widget, index) => (
        <motion.div
          key={widget.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            y: -6,
          }}
          className="bg-white/80 backdrop-blur-lg border border-white/30 shadow-lg rounded-3xl p-6 flex items-center gap-5"
        >
          <div className="bg-gradient-to-br from-[#5162be] to-[#6d4aff] text-white p-4 rounded-2xl shadow-md text-2xl">
            {widget.icon}
          </div>

          <div className="flex flex-col">
            <span className="text-4xl font-bold text-slate-800">
              {widget.count}
            </span>

            <span className="text-slate-500 font-medium">{widget.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Widgets;
