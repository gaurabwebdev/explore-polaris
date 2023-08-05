import React from "react";
import ChartDiv from "../Shared/ChartDiv/ChartDiv";

const ChartContainer = () => {
  return (
    <>
      <h4 className="font-medium text-base uppercase">size chart border</h4>
      <p className="text-xl">
        Select the border that will appear in your size chart:
      </p>
      <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-3">
        <ChartDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/b_tunnel.svg"
          />
        </ChartDiv>
        <ChartDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/b_lines.svg"
          />
        </ChartDiv>
        <ChartDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/b_grid.svg"
          />
        </ChartDiv>
      </div>
    </>
  );
};

export default ChartContainer;
