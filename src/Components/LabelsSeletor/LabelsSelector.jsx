import React from "react";

const LabelsSelector = () => {
  return (
    <>
      <h4 className="font-medium text-base uppercase">label</h4>
      <p className="text-xl">
        Select the label and that will appear in your store. The label can be
        entered in any language.
      </p>
      <input
        className="p-2 border border-gray-700 rounded w-full md:w-96 outline-yellow-300"
        type="text"
        placeholder="SIZE GUIDE"
      />
    </>
  );
};

export default LabelsSelector;
