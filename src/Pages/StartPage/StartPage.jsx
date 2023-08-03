import React from "react";
import PrimaryCard from "../../Components/Shared/PrimaryCard/PrimaryCard";
import PrimaryBtn from "../../Components/Shared/PrimaryBtn/PrimaryBtn";

const StartPage = () => {
  return (
    <div className="m-6">
      <div className="flex flex-col items-center h-[768px] md:h-[648px] shadow-lg p-3">
        <img
          className="w-80 h-20"
          src="/public/smartsizetext.png"
          alt="title-picture"
        />
        <div className="flex justify-between items-center gap-2 my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
          <p className="text-base">
            Create your first size chart in less than 5 minutes. Fast and
            simple.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row justify-between items-center gap-3 mt-12">
          <div className="w-full md:w-[400px] p-6 shadow-lg h-60 bg-gray-300 rounded-md">
            <div className="flex flex-col items-start gap-3 text-start">
              <p className="text-base font-medium uppercase">Step 1</p>
              <h3 className="text-2xl font-medium">Embed SmartSize</h3>
              <p className="text-sm ">
                Embed the app in your Shopify theme. Click below to start
                embedding.{" "}
                <span className="font-medium text-red-500 ml-1">
                  Make sure to click SAVE after you are done.
                </span>
              </p>
              <PrimaryBtn>
                <span className="font-medium">activate</span>
              </PrimaryBtn>
            </div>
          </div>
          <div className="w-full md:w-[400px] p-6 shadow-lg h-60 bg-gray-300 rounded-md">
            <div className="flex flex-col items-start gap-3 text-start">
              <p className="text-base font-medium uppercase">Step 2</p>
              <h3 className="text-2xl font-medium">Create new size chart</h3>
              <p className="text-sm mb-5 md:mb-10">
                Create your size chart, link it to a product and publish it.
              </p>
              <PrimaryBtn>
                <span className="font-medium">new size chart</span>
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
