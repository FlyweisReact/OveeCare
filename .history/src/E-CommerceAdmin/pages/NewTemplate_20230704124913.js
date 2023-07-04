/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HOC from "../layout/HOC";

const NewTemplate = () => {
  const [add, setAdd] = useState(false);
  const [care, setCare] = useState(false);
  const navigate = useNavigate();

  const ShowDiv = () => {
    setAdd(!add);
    navigate("#Care_Element");
  };

  function ImageHandler() {
    const target = document.getElementById("file");
    target.click();
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
          <select>
            <option>-- Select Speciality --</option>
            <option> Obstetrics </option>
            <option> Paediatrician </option>
            <option> Cardiologist </option>
            <option> Urology </option>
          </select>
        </div>

        <div className="InputForm mt-3">
          <p>Month</p>
          <select>
            <option>-- Select Month --</option>
            <option> January </option>
            <option> February </option>
            <option> March </option>
            <option> April </option>
            <option> May </option>
            <option> June </option>
            <option> July </option>
            <option> August </option>
            <option> September </option>
            <option> October </option>
            <option> November </option>
            <option> December </option>
          </select>
        </div>

        <div className="InputForm mt-3">
          <p>EDD</p>
          <div className="two_sec">
            <input type="text" placeholder="" value="LMP" />

            <i className="fa-solid fa-plus"></i>

            <input type="number" placeholder="" min={275} max={285} />
          </div>
        </div>
      </form>

      <div className="Center_Add_Button mt-4">
        <i
          className="fa-solid fa-circle-plus"
          style={{ cursor: "pointer" }}
          onClick={() => ShowDiv()}
        ></i>
        <button onClick={() => ShowDiv()}>Add New Push Message</button>
      </div>

      {add ? (
        <div className="Care_Div">
          <div className="two">
            <p>Day</p>
            <input min={0} type="number" placeholder="1" />
          </div>
          <div className="two mt-3">
            <p>Time</p>
            <input type="time" />
          </div>

          <p className="head"> Care Element</p>

          <div className="two Special" onClick={() => setCare(!care)}>
            <i className="fa-solid fa-circle-plus"></i>
            <p>Care element </p>
          </div>

          {care ? (
            <>
            <div className="two Special" style={{textAlign : 'center' , maxWidth  : '100%'}}>
            <p>Care element 1</p>
          </div>
              <div className="two Special Extra mt-3">
                <select>
                  <option>-- Select Care Element --</option>
                  <option>Nutrition & Diet</option>
                  <option>Physio</option>
                  <option>Exercises</option>
                  <option>Do’s & Don’ts</option>
                </select>
              </div>

              <div className="two Special Extra mt-3">
                <textarea placeholder="Type a message" />
              </div>

              <button
                className="CenterButton mt-5"
                onClick={() => ImageHandler()}
              >
                <input type="file" id="file" style={{ display: "none" }} accept="image/png, image/jpeg , video , pdf/*" />
                <i className="fa-solid fa-upload"></i> Upload
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <div className="Template_Form">
        <div className="SaveBtn">
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default HOC(NewTemplate);
