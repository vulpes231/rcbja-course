import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { MdClose, MdError } from "react-icons/md";

const Toast = ({ type = "success", message, onClose }) => {
  const variants = {
    success: {
      title: "Success",
      icon: <BiCheckCircle size={18} />,
      styles: {
        container: "bg-white border border-green-100 text-slate-800",
        iconBg: "bg-green-100 text-green-600",
      },
    },

    error: {
      title: "Error",
      icon: <MdError size={18} />,
      styles: {
        container: "bg-white border border-red-100 text-slate-800",
        iconBg: "bg-red-100 text-red-600",
      },
    },
  };

  const current = variants[type];

  return (
    <div
      className={`
        fixed top-6 right-6
        w-[90%] max-w-sm
        rounded-2xl
        shadow-lg
        backdrop-blur-sm
        p-4
        z-50
        animate-in slide-in-from-top-2
        ${current.styles.container}
      `}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className={`
            h-10 w-10
            rounded-full
            flex items-center justify-center
            shrink-0
            ${current.styles.iconBg}
          `}
        >
          {current.icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="font-semibold text-sm">{current.title}</h4>

              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                {message}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
                text-slate-400
                hover:text-slate-700
                transition-colors
                cursor-pointer
                mt-0.5
              "
            >
              <MdClose size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
