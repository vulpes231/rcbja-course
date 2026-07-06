import React, { useState } from "react";
import CourseCard from "./CourseCard";
import PaymentModal from "./PaymentModal";

const CourseList = () => {
  const [course, setCourse] = useState("");
  const [showModal, setShowModal] = useState(false);
  const availableCourses = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      tag: "security",
      title: "Private Investigator",
      review: 4.8,

      tutor: {
        name: "Dorothy Saleh",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
      },

      metadata: {
        chapters: 10,
        duration: "0h 00m",
        points: 50,
      },

      completion: 65,
    },
  ];

  const handleClick = (crs) => {
    console.log("clcicked show modal");
    setCourse(crs);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Enrolled Courses
          </h2>

          <p className="text-slate-500 mt-1">Continue your learning journey</p>
        </div>

        <button className="text-[#5126be] font-semibold hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {availableCourses.map((course) => (
          <CourseCard
            course={course}
            key={course.id}
            handleClick={() => handleClick(course)}
          />
        ))}
      </div>
      {showModal && (
        <PaymentModal course={course} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default CourseList;
