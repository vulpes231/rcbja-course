import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import { LuBookmarkCheck } from "react-icons/lu";
import { VscOpenPreview } from "react-icons/vsc";
import { MdOutlineHistory } from "react-icons/md";
import { BsGear } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { FaLock } from "react-icons/fa";

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
        id: "courses",
        label: "Enrolled Courses",
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
  return (
    <div className="bg-white p-4">
      <p>Welcome, Briyenne Duterne</p>
      <div className="flex flex-col gap-3 mt-4">
        {links.map((link) => {
          return (
            <Link
              onClick={(e) => {
                e.preventDefault();
                if (link.isLocked) {
                  return;
                }
                setActiveLink(link.path);
                navigate(link.path);
              }}
              className={`flex items-center justify-between ${activeLink === link.path ? "text-purple-500" : ""}`}
              key={link.id}
              to={link.path}
            >
              <div className="flex items-center gap-2">
                {" "}
                <span>{link.icon}</span>
                <span> {link.label}</span>
              </div>

              <span>{link.isLocked && <FaLock />}</span>
            </Link>
          );
        })}
        <span>
          <button className={`flex items-center gap-2`}>
            <IoMdLogOut /> Logout
          </button>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
