/** @format */

import React from "react";
import HOC from "../layout/HOC";

const NewTemplate = () => {
  return (
    <>
      <div className="Heading-Container">
        <p>Create New Templates</p>
      </div>

      <form className="Template_Form">
        <div className="InputForm">
          <p>Template Name</p>
          <input type="text" />
        </div>

        <div className="InputForm mt-3">
          <p>Speciality</p>
          <input type="text" />
        </div>

        <div className="InputForm mt-3">
          <p>Month</p>
          <input type="text" />
        </div>

        <div className="InputForm mt-3">
          <p>EDD</p>
          <div className="two_sec">
            <input type="text" placeholder="LMP" />

            <i className="fa-solid fa-plus"></i>

            <input type="text" placeholder="280 days" />
          </div>
        </div>

        <div className="SaveBtn">
            <button>Save</button>
        </div>
      </form>

        

    </>
  );
};

export default HOC(NewTemplate);
