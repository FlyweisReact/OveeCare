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

        <div className="InputForm">
          <p>Speciality</p>
          <input type="text" />
        </div>

        <div className="InputForm">
          <p>Month</p>
          <input type="text" />
        </div>
      </form>
    </>
  );
};

export default HOC(NewTemplate);
