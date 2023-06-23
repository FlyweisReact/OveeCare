/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { AiOutlinePlus } from "react-icons/ai";

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
          <ul>
            <li tabIndex={0}>Pregnancy</li>
            <li tabIndex={0}>Other Medical</li>
            <li tabIndex={0}> General</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="Focused">View All</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HOC(Template);
