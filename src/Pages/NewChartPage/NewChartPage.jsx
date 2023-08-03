import React from "react";
import SizeSlider from "../../Components/SizeSilder/SizeSlider";

const NewChartPage = () => {
  return (
    <div className="m-6">
      <div>
        <div className="mb-12">
          <h2 className="text-3xl font-medium mb-6">New Size Chart</h2>
          <p className="text-base">
            Select the starting template that matches your needs. Some templates
            may contain pre-filled data. Please, make sure that you add, delete
            or modify the data inside the template to match the sizing of your
            garnment.
          </p>
        </div>
      </div>
      <SizeSlider />
    </div>
  );
};

export default NewChartPage;
