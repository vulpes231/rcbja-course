import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { AiOutlineHome } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import { LuBookmarkCheck } from "react-icons/lu";
import { VscOpenPreview } from "react-icons/vsc";
import { MdOutlineHistory } from "react-icons/md";
import { BsGear } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { FaLock, FaRegUser } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");

  const links = useMemo(() => {
    return [
      {
        id: "home",
        label: "Dashboard",
        path: "/dashboard",
        icon: <AiOutlineHome />,
        isLocked: false,
      },
      {
        id: "profile",
        label: "Profile",
        path: "/profile",
        icon: <FaRegUser />,
        isLocked: false,
      },
      {
        id: "courses",
        label: "Courses",
        path: "/courses",
        icon: <IoBookOutline />,
        isLocked: true,
      },
      {
        id: "exams",
        label: "Exams",
        path: "/exams",
        icon: <LuBookmarkCheck />,
        isLocked: true,
      },
      {
        id: "review",
        label: "Review",
        path: "/review",
        icon: <VscOpenPreview />,
        isLocked: true,
      },
      {
        id: "history",
        label: "History",
        path: "/history",
        icon: <MdOutlineHistory />,
        isLocked: true,
      },
      {
        id: "settings",
        label: "Settings",
        path: "/settings",
        icon: <BsGear />,
        isLocked: true,
      },
    ];
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    sessionStorage.clear();
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 backdrop-blur-lg border border-white/30 shadow-xl p-6 w-80 rounded-3xl h-full"
    >
      {/* Profile */}
      <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
        <div className="bg-[#f3efff] p-2 rounded-2xl">
          <BiSolidUserCircle className="text-5xl text-[#5162be]" />
        </div>

        <div>
          <h2 className="font-bold text-slate-800">Briyenne Duterne</h2>
          <p className="text-sm text-[#5162be] font-medium">Premium User</p>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-2 mt-6">
        {links.map((link) => {
          const isActive = activeLink === link.path;

          return (
            <motion.div
              whileHover={{
                x: 4,
              }}
              whileTap={{ scale: 0.98 }}
              key={link.id}
            >
              <Link
                onClick={(e) => {
                  e.preventDefault();

                  if (link.isLocked) return;

                  setActiveLink(link.path);
                  navigate(link.path);
                }}
                to={link.path}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group
                  
                  ${
                    isActive
                      ? "bg-[#5162be] text-white shadow-lg"
                      : "text-slate-600 hover:bg-[#f5f1ff]"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xl ${
                      isActive ? "text-white" : "text-[#5162be]"
                    }`}
                  >
                    {link.icon}
                  </span>

                  <span className="font-medium">{link.label}</span>
                </div>

                {link.isLocked && (
                  <FaLock
                    className={`text-sm ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Logout */}
      <motion.button
        onClick={handleLogout}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className="mt-8 flex items-center gap-3 w-full px-4 py-3 rounded-2xl bg-red-50 text-red-500 hover:bg-red-100 transition-all duration-300 cursor-pointer"
      >
        <IoMdLogOut className="text-xl" />
        <span className="font-medium">Logout</span>
      </motion.button>
    </motion.aside>
  );
};

export default Sidebar;
