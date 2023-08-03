import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SizeSlider = () => {
  return (
    <div>
      <div>
        <Tabs>
          <TabList
            className={`flex justify-center items-center gap-12 bg-black py-2 text-white`}
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
            <div className="px-12 py-3 flex justify-evenly items-center"></div>
          </TabPanel>
          <TabPanel>
            <div className="px-12 py-3"></div>
          </TabPanel>
          <TabPanel>
            <div className="px-12 py-3"></div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SizeSlider;
