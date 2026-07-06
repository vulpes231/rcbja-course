import React from "react";
import { motion } from "framer-motion";

import { GrCertificate } from "react-icons/gr";
import { LuClock8, LuBookOpenText } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";

const CourseCard = ({ course, handleClick }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.25 }}
      className="bg-white/80 backdrop-blur-lg border border-white/30 rounded-3xl overflow-hidden shadow-xl"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-52 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="py-1.5 px-4 rounded-full bg-white/90 backdrop-blur-md text-[#5162be] capitalize text-sm font-semibold">
            {course.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <div>
          <h2 className="font-bold text-xl text-slate-800">{course.title}</h2>

          <div className="flex items-center gap-1 mt-2 text-sm text-slate-500">
            <GoStarFill className="text-yellow-500" />

            <span className="font-medium">{course.review}</span>

            <span>(120 Reviews)</span>
          </div>
        </div>

        {/* Tutor */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={course.tutor.image}
              alt={course.tutor.name}
              className="h-10 w-10 rounded-full object-cover border-2 border-[#ede7ff]"
            />

            <div>
              <p className="font-semibold text-slate-700">
                {course.tutor.name}
              </p>

              <small className="text-slate-400">Senior Instructor</small>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="bg-[#f7f4ff] rounded-2xl p-3 text-center">
            <LuBookOpenText className="mx-auto text-[#5162be] text-lg mb-1" />
            <p className="font-semibold">{course.metadata.chapters}</p>
            <small className="text-slate-500">Modules</small>
          </div>

          <div className="bg-[#f7f4ff] rounded-2xl p-3 text-center">
            <LuClock8 className="mx-auto text-[#5162be] text-lg mb-1" />
            <p className="font-semibold">{course.metadata.duration}</p>
            <small className="text-slate-500">Duration</small>
          </div>

          <div className="bg-[#f7f4ff] rounded-2xl p-3 text-center">
            <GrCertificate className="mx-auto text-[#5162be] text-lg mb-1" />
            <p className="font-semibold">{course.metadata.points}</p>
            <small className="text-slate-500">Points</small>
          </div>
        </div>

        {/* Progress */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">
              Application Progress
            </span>

            <span className="font-semibold text-[#5162be]">
              {course.completion}%
            </span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${course.completion}%`,
              }}
              transition={{
                duration: 1,
              }}
              className="bg-linear-to-r from-[#5162be] to-[#7a5cff] h-full rounded-full"
            />
          </div>
        </div>

        {/* CTA */}
        <button
          type={"button"}
          onClick={handleClick}
          className="mt-2 bg-[#5162be] hover:bg-[#4520a5] transition-all duration-300 text-white py-3 rounded-2xl font-semibold shadow-md"
        >
          Complete Application
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
