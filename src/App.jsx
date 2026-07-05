import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Course,
  DashBoard,
  Exams,
  History,
  Landing,
  Review,
  Settings,
} from "./pages";
import Header from "./pages/Layout/Header";
import Sidebar from "./pages/DashBoard/Sidebar";

const App = () => {
  const isOtpVerified = sessionStorage.getItem("otpVerified");

  useEffect(() => {
    if (isOtpVerified !== "1") {
      sessionStorage.clear();
      window.location.href = "/";
    }
  }, [isOtpVerified]);
  return (
    <div>
      <Header />
      <div className="mt-20 p-6 flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/dashboard"} element={<DashBoard />} />
          <Route path={"/exams"} element={<Exams />} />
          <Route path={"/courses"} element={<Course />} />
          <Route path={"/history"} element={<History />} />
          <Route path={"/review"} element={<Review />} />
          <Route path={"/settings"} element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
