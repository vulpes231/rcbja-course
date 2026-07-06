import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const navigate = useNavigate();
  const location = useLocation();

  const isOtpVerified = sessionStorage.getItem("otpVerified");

  useEffect(() => {
    const publicRoutes = ["/"];

    if (isOtpVerified !== "1" && !publicRoutes.includes(location.pathname)) {
      sessionStorage.clear();
      navigate("/", { replace: true });
    }
  }, [isOtpVerified, location.pathname, navigate]);

  const showDashboardLayout = location.pathname !== "/";

  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-[#f5f1ff] via-white to-[#eef2ff]">
      <Header />

      <main className="w-full mt-25">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {showDashboardLayout ? (
              <div className="w-full flex gap-0 md:gap-6">
                {/* Sidebar */}
                <div className="hidden lg:block sticky top-24 w-86">
                  <Sidebar />
                </div>

                {/* Mobile Sidebar Button Placeholder */}
                <div className="lg:hidden">{/* Add mobile drawer later */}</div>

                {/* Main Content */}
                <div className="w-full">
                  <Routes>
                    <Route path="/dashboard" element={<DashBoard />} />

                    <Route path="/courses" element={<Course />} />

                    <Route path="/exams" element={<Exams />} />

                    <Route path="/history" element={<History />} />

                    <Route path="/review" element={<Review />} />

                    <Route path="/settings" element={<Settings />} />
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
