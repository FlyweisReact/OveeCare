/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HOC from "../layout/HOC";

const NewTemplate = () => {
  const [add, setAdd] = useState(false);
  const [ care , setCare ] = useState(false)
    const navigate = useNavigate()

    const ShowDiv  = () => {
        setAdd(!add)
        navigate('#Care_Element')
    }


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

      <div className="Center_Add_Button" onClick={() => ShowDiv()}>
        <i className="fa-solid fa-circle-plus"></i>
        <button>Add New Push Message</button>
      </div>

      {add ? (
        <div className="Care_Div" >
          <div className="two">
            <p>Day</p>
            <input min={0} type="number" placeholder="1" />
          </div>
          <div className="two mt-3">
            <p>Time</p>
            <input type="time" />
          </div>

          <p className="head"> Care Element</p>

        
          <div className="two Special" onClick={() => setCare(!care)} >
            <i className="fa-solid fa-circle-plus"></i>
            <p>Care element 1</p>
          </div>

          {
            care ? 
          }

       

          <div className="SaveBtn" id="#Care_Element">
            <button>Save</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(NewTemplate);
