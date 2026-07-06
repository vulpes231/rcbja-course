import { format } from "date-fns";
import React from "react";
import { BiUser } from "react-icons/bi";

const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const profileItems = [
    {
      label: "Registration Date",
      value: format(user?.regDate, "MMM dd, yyyy"),
    },
    {
      label: "First Name",
      value: user?.firstname,
    },
    {
      label: "Last Name",
      value: user?.lastname,
    },
    {
      label: "Username",
      value: user?.username ? `@${user.username}` : "-",
    },
    {
      label: "Email Address",
      value: user?.email || "-",
    },
    {
      label: "Phone Number",
      value: user?.phone || "-",
    },
    {
      label: "Address",
      value: user?.address || "-",
    },
  ];

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-slate-200
        shadow-sm
        overflow-hidden
      "
    >
      {/* Header */}
      <div
        className="
          px-6 py-5
          border-b border-slate-100
          flex items-center gap-3
        "
      >
        <div
          className="
            h-12 w-12
            rounded-full
            bg-slate-100
            flex items-center justify-center
            text-slate-700
          "
        >
          <BiUser size={22} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Profile Information
          </h2>

          <p className="text-sm text-slate-500">
            Your personal account details
          </p>
        </div>
      </div>

      {/* Profile Data */}
      <div className="divide-y divide-slate-100">
        {profileItems.map((item, index) => (
          <div
            key={index}
            className="
              px-6 py-4
              flex flex-col sm:flex-row
              sm:items-center
              sm:justify-between
              gap-1
            "
          >
            <span className="text-sm font-medium text-slate-500">
              {item.label}
            </span>

            <span
              className="
                text-sm
                font-semibold
                text-slate-800
                break-words
              "
            >
              {item.value || "-"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
