import React from "react";

const SecondaryBtn = ({ children }) => {
  return (
    <button className="px-6 py-2 hover:bg-gray-300 transition-all duration-300 text-base font-semibold rounded-md">
      {children}
    </button>
  );
};

export default SecondaryBtn;
