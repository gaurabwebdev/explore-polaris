import React from "react";
import PrimaryBtn from "../../Components/Shared/PrimaryBtn/PrimaryBtn";
import IconsContainer from "../../Components/IconsContainer/IconsContainer";
import LabelsSelector from "../../Components/LabelsSeletor/LabelsSelector";
import ColorTable from "../../Components/ColorTable/ColorTable";

const SettingsPage = () => {
  return (
    <div className="p-6 bg-gray-300">
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
      <div className="mt-12 bg-white p-6 border border-gray-900 rounded  flex flex-col gap-8">
        <LabelsSelector />
      </div>
      <div className="mt-12 bg-white p-6 border border-gray-900 rounded  flex flex-col gap-8">
        <h4 className="font-medium text-base uppercase">font style</h4>
        <p className="text-xl">
          Select the font style that you wish to have in your size charts. You
          can use our default font (Montserrat) or the same font as in your
          Shopify theme.
        </p>
        <div className="flex items-center gap-6 text-xl">
          <div className="flex items-center gap-3">
            <input type="radio" name="style-selector" id="" />
            <label htmlFor="style-selector">SmartSize Style</label>
            <input type="radio" name="style-selector" id="" />
            <label htmlFor="style-selector">Theme Style</label>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-white p-6 border border-gray-900 rounded  flex flex-col gap-8">
        <h4 className="font-medium text-base uppercase">
          SIZE BUTTON PLACEMENT
        </h4>
        <div className="flex items-center gap-6 text-xl">
          <div className="flex items-center gap-3">
            <input type="radio" name="button-selector" id="" />
            <label htmlFor="button-selector">Floating Button</label>
            <input type="radio" name="button-selector" id="" />
            <label htmlFor="button-selector">Inline Button</label>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-white p-6 border border-gray-900 rounded  flex flex-col gap-8">
        <h4 className="font-medium text-base uppercase">colors</h4>
        <p className="text-xl">
          Choose the colors for your size chart to match your store.
        </p>
        <div className="flex items-center text-sm p-5">
          <ColorTable />
        </div>
        <div className="flex flex-col gap-5 px-2 md:px-6">
          <div className="flex justify-between items-center ">
            <p className="capitalize font-semibold text-xl">
              header background
            </p>
            <div className="h-8 w-8 md:h-16 md:w-16 rounded-full border cursor-text border-black bg-black">
              <input
                className="w-full h-full opacity-0"
                type="color"
                name="header-background"
                id=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="capitalize font-semibold text-xl">header text</p>
            <div className="h-8 w-8 md:h-16 md:w-16 rounded-full border cursor-text border-black bg-white">
              <input
                className="w-full h-full opacity-0"
                type="color"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="capitalize font-semibold text-xl">zebra lines</p>
            <div className="h-8 w-8 md:h-16 md:w-16 rounded-full border cursor-text border-black bg-gray-400">
              <input
                className="w-full h-full opacity-0"
                type="color"
                name="header-text"
                id=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="capitalize font-semibold text-xl">focus</p>
            <div className="h-8 w-8 md:h-16 md:w-16 rounded-full border cursor-text border-black bg-cyan-600">
              <input
                className="w-full h-full opacity-0"
                type="color"
                name="header-focus"
                id=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
