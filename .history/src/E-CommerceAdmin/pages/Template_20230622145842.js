/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { AiOutlinePlus } from "react-icons/ai";
import { Tabs } from 'antd';


import type { TabsProps } from 'antd';



const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
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

        <div className="">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />z
        </div>


    </>
  );
};

export default HOC(Template);
