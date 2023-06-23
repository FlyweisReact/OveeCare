/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { AiOutlinePlus } from "react-icons/ai";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const items = [
  {
    key: "1",
    label: `Pregnancy`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "2",
    label: `Other Medical`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `General`,
    children: `Content of Tab Pane 3`,
  },
];

const Template = () => {
  return (
    <>
      <div className="Heading-Container">
        <p>Templates</p>
        <div className="two-sec-container">
          <button className="btn-1">Modify</button>
          <button className="btn-2">
            <AiOutlinePlus className="text-xl" />
            Create New
          </button>
        </div>
      </div>

      <div className="Four_Sec_Temp">
        <div>
          <a>Pregnancy</a>
          <a>Other Medical</a>
          <a>General</a>
        </div>
        <div>
          <a>View All</a>
        </div>
      </div>
    </>
  );
};

export default HOC(Template);
