import React from "react";
import IconDiv from "../Shared/IconDiv/IconDiv";

const IconsContainer = () => {
  return (
    <>
      <h4 className="font-medium text-base uppercase">icon</h4>
      <p className="text-xl">Select the icon that will appear in your store:</p>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/ruler.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/hanger.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/arrows.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/arrows_pink.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/hanger_pink.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/ruler_pink.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/arrows_grey.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/hanger_grey.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/ruler_grey.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/arrows_black.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/hanger_black.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/ruler_black.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/arrows_brown.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/hanger_brown.svg"
          />
        </IconDiv>
        <IconDiv>
          <img
            className="w-16 h-16"
            src="https://client.smartsize.io/ruler_brown.svg"
          />
        </IconDiv>
        <IconDiv>
          <div className="w-16 h-16" src="" />
        </IconDiv>
      </div>
    </>
  );
};

export default IconsContainer;
