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

      <div className="Center_Add_Button">
        <i className="fa-solid fa-circle-plus"></i>
        <button>Add New Push Message</button>
      </div>

      <div className="Care_Div">
        <div className="two">
          <p>Day</p>
          <input min={0} type="number" placeholder="1" />
        </div>
        <div className="two mt-3">
          <p>Time</p>
          <input  type="time" />
        </div>

        <p className="head"> Care Element</p>

        <div className="two Special">
        <i className="fa-solid fa-circle-plus"></i>
        <p>Care element 1</p>
        </div>

        <div className="two Special Extra mt-3">
        <input  type="text" placeholder="Name" />

        <i className="fa-solid fa-circle-plus"></i>
        </div>

        <div className="two Special Extra mt-3">
        <input  type="text" placeholder="Type a message" />

        <i className="fa-solid fa-circle-plus"></i>
        </div>

        <button className="CenterButton">Save</button>
      </div>
    </>
  );
};

export default HOC(NewTemplate);
