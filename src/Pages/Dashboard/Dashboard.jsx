import React, { useState } from "react";
import PrimaryBtn from "../../Components/Shared/PrimaryBtn/PrimaryBtn";

const Dashboard = () => {
  const [inputFocused, setInputFocused] = useState(false);
  return (
    <div className="m-6">
      <div className="">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">Dashboard</h2>
          <PrimaryBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium">New Size Chart</span>
          </PrimaryBtn>
        </div>
        <div>
          <div
            className={`relative ${
              inputFocused ? "bg-gray-500" : "bg-gray-100"
            } flex justify-between items-center h-12 mt-4 p-2 rounded-md`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={`${inputFocused ? "#09BCD4" : "currentColor"}`}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              className={`w-full h-full ${
                inputFocused ? "bg-gray-500" : "bg-gray-100"
              } outline-none ml-3 text-white`}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
