import React from "react";
import PrimaryBtn from "../../Components/Shared/PrimaryBtn/PrimaryBtn";
import IconsContainer from "../../Components/IconsContainer/IconsContainer";

const SettingsPage = () => {
  return (
    <div className="m-6">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">Settings</h2>
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <span className="font-medium">Save</span>
          </PrimaryBtn>
        </div>
      </div>
      <div className="mt-12 p-6 border border-gray-900 rounded bg-white flex flex-col gap-8">
        <IconsContainer />
      </div>
    </div>
  );
};

export default SettingsPage;
