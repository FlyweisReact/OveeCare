/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { AiOutlinePlus } from "react-icons/ai";
import { } from 'any'




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
            {/* <Tabs defaultActiveKey="1" items={items}  /> */}
        </div>


    </>
  );
};

export default HOC(Template);
