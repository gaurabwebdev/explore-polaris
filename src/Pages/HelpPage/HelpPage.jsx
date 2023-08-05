import React from "react";

const HelpPage = () => {
  return (
    <div className="m-6">
      <div className="">
        <div className="flex justify-between items-center p-3">
          <h2 className="text-3xl font-medium">Help Center</h2>
          <button className="px-8 py-3 flex justify-center items-center gap-2 border hover:bg-gray-300 transition-all duration-300 rounded-md uppercase">
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
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>

            <span className="font-medium">Visit Our Help Center</span>
          </button>
        </div>
        <div className="h-[80vh] overflow-y-scroll">
          <div className="flex flex-col gap-3 m-3">
            <div className="shadow-lg py-12 px-6">
              <h3 className="text-sm uppercase font-bold mb-4">faq</h3>
              <p className="text-xl font-medium mb-6">
                I am unable to view the size charts in my store
              </p>
              <ul className="list-disc ml-3 md:ml-6">
                <li>Is SmartSize embeded in your Theme?</li>
                <li>Has the size chart been published?</li>
                <li>Is the size chart linked to a product?</li>
              </ul>
            </div>
            <div className="shadow-lg py-12 px-6">
              <h3 className="text-sm uppercase font-bold mb-4">faq</h3>
              <p className="text-xl font-medium mb-6">
                I want to change the position of the size chart button
              </p>
              <ul className="list-disc ml-3 md:ml-6">
                <li>Change the position using the App Block</li>
                <li>Change the position using a CSS selector</li>
              </ul>
            </div>
            <div className="shadow-lg py-12 px-6">
              <h3 className="text-sm uppercase font-bold mb-4">faq</h3>
              <p className="text-xl font-medium mb-6">
                I hav additional questions
              </p>
              <ul className="list-disc ml-3 md:ml-6">
                <li>
                  Visit our Help Center for answers to our most frequently asked
                  questions.
                </li>
                <li>
                  e strive to respond promptly, typically within a few hours.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
