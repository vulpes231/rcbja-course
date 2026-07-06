import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Course,
  DashBoard,
  Exams,
  History,
  Landing,
  Profile,
  Review,
  Settings,
} from "./pages";

import Header from "./pages/Layout/Header";
import Sidebar from "./pages/DashBoard/Sidebar";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isOtpVerified = sessionStorage.getItem("otpVerified");

  // Auth Guard
  useEffect(() => {
    const publicRoutes = ["/"];

    if (isOtpVerified !== "1" && !publicRoutes.includes(location.pathname)) {
      sessionStorage.clear();
      navigate("/", { replace: true });
    }
  }, [isOtpVerified, location.pathname, navigate]);

  // Scroll To Top On Route Change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const showDashboardLayout = location.pathname !== "/";

  return (
    <div className="min-h-screen w-screen bg-slate-100">
      {showDashboardLayout && <Header />}

      <main className={`w-full ${showDashboardLayout ? "mt-24" : "mt-0"}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {showDashboardLayout ? (
              <div className="w-full flex gap-0 lg:gap-6">
                {/* Sidebar */}
                <div className="hidden lg:block sticky top-24 w-80">
                  <Sidebar />
                </div>

                {/* Main Content */}
                <div className="w-full">
                  <Routes>
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/courses" element={<Course />} />
                    <Route path="/exams" element={<Exams />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<Landing />} />
              </Routes>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
