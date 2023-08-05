import React from "react";
import PrimaryBtn from "../../Components/Shared/PrimaryBtn/PrimaryBtn";

const PlanPage = () => {
  return (
    <div className="m-6">
      <div className=" ">
        <div className="flex flex-col items-start p-3">
          <h2 className="text-3xl font-medium">Plans</h2>
          <p className="mt-6 text-xl">
            Your current plan is :{" "}
            <span className="uppercase text-cyan-500">free</span>
          </p>
        </div>
        <div className="h-[80vh] overflow-y-scroll">
          <div className="flex flex-col md:flex-row justify-center gap-5 mt-8">
            <div className="shadow-lg w-80 h-[500px] mx-auto md:mx-0">
              <div className="p-6 flex flex-col justify-center items-center gap-4 border-b">
                <h4 className="font-medium text-xl text-cyan-500 capitalize">
                  free
                </h4>
                <h2 className="font-medium capitalize text-4xl">free</h2>
              </div>
              <div className="px-3 py-6 pb-6 flex flex-col justify-center items-center gap-4">
                <PrimaryBtn>Select</PrimaryBtn>
                <ul className="text-xl flex flex-col gap-5 items-center mb-6">
                  <li>2 published size charts</li>
                  <li>no watermark</li>
                  <li>automatic conversion cm / in</li>
                  <li>upload your images</li>
                  <li>change icons, labels & colors</li>
                  <li>adjust pop up width</li>
                </ul>
              </div>
            </div>
            <div className="shadow-lg w-80 h-[500px] mx-auto md:mx-0">
              <div className="p-6 flex flex-col justify-center items-center gap-4 border-b">
                <h4 className="font-medium text-xl text-cyan-500 capitalize">
                  $6.99/ month
                </h4>
                <h2 className="font-medium capitalize text-4xl">free</h2>
              </div>
              <div className="px-3 py-6 pb-6 flex flex-col justify-center items-center gap-4">
                <PrimaryBtn>Select</PrimaryBtn>
                <ul className="text-xl flex flex-col gap-5 items-center mb-6">
                  <li>All features included in Free Plan</li>
                  <li>Unlimited size charts</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
