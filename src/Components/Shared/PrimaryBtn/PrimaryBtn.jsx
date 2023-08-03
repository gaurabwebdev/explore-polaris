import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button className="px-8 py-3 flex justify-center items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-white rounded-md">
      {children}
    </button>
  );
};

export default PrimaryBtn;
