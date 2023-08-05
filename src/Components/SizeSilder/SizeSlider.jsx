import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./SizeSlider.css";

const SizeSlider = () => {
  return (
    <div>
      <div>
        <Tabs>
          <TabList
            className={`flex flex-col md:flex-row justify-center items-center gap-5 md:gap-12 bg-black py-3 text-white category-tab-container`}
          >
            <Tab>
              <p>Blank</p>
            </Tab>
            <Tab>
              <p>Women</p>
            </Tab>
            <Tab>
              <p>Men</p>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="px-20 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center bg-gray-200">
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/blank-category/woman.a89832eb.svg"
                  alt="women-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">woman</p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/blank-category/man.aa6a4b32.svg"
                  alt="men-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">men</p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/blank-category/girl.631b4fed.svg"
                  alt="girl-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">girl</p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/blank-category/boy.e7476d7e.svg"
                  alt="boy-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">boy</p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="/public/size-slider-img/blank-category/ilu_lean.a3c749ad.svg"
                  alt="blank-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">
                  blank size chart
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="px-20 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center bg-gray-200">
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/women/woshirt.a52f4469.svg"
                  alt="top-women-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">top woman</p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/women/017-pants.b5cb83f0.svg"
                  alt="women-pant-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">
                  bottom women
                </p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/women/042-dress.abe53419.svg"
                  alt="women-dress-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">
                  dress women
                </p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/women/029-highheels.f466dc8d.svg"
                  alt="women-shoes-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">
                  shoes women
                </p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="/public/size-slider-img/women/046-swimsuit.a719a34b.svg"
                  alt="blank-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">
                  swim women
                </p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/women/035-brassiere.03fa33c2.svg"
                  alt="blank-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">bra women</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="px-10 md:px-20 py-5 md:py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center bg-gray-200">
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/men/023-polo.a8898ee5.svg"
                  alt="polo-men-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">polo men</p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/men/045-shirt.e4e42b7d.svg"
                  alt="men-shirt-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">shirt men</p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/men/004-blazer.5e36e04f.svg"
                  alt="men-jacket-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">
                  jacket men
                </p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/men/017-pants.b5cb83f0.svg"
                  alt="women-pants-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">
                  bottom men
                </p>
              </div>
              <div className="bg-white border border-gray-900 px-8 py-10 rounded flex flex-col items-center">
                <img
                  src="/public/size-slider-img/men/027-shoes.98f568ac.svg"
                  alt="shoes-icon"
                />
                <p className="text-sm font-medium capitalize mt-3">
                  shoes icon
                </p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SizeSlider;
