import React from "react";
import { motion } from "framer-motion";
import Widgets from "./Widgets";
import CourseList from "./CourseList";

const Content = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/70 backdrop-blur-lg border border-white/30 shadow-xl p-6 rounded-3xl w-full flex flex-col gap-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard Overview
        </h1>

        <p className="text-slate-500 mt-1">
          Track your learning progress and activities.
        </p>
      </div>

      <Widgets />
      <CourseList />
    </motion.div>
  );
};

export default Content;
