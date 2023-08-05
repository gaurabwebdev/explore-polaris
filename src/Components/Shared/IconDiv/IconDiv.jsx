import React from "react";

const IconDiv = ({ children }) => {
  return (
    <div className="p-6 border border-gray-700 rounded flex flex-col items-start justify-between gap-4">
      <div className="mx-auto">{children}</div>
      <input type="radio" name="icon-selector" />
    </div>
  );
};

export default IconDiv;
