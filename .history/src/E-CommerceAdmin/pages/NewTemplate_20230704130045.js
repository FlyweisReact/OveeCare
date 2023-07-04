/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HOC from "../layout/HOC";

const NewTemplate = () => {
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();

  const ShowDiv = () => {
    setAdd(!add);
    navigate("#Care_Element");
  };

  function ImageHandler() {
    const target = document.getElementById("file");
    target.click();
  }

  const [arr, setArr] = useState([]);

  const MakeArray = (element) => {
    setArr((curr) => [...curr, element]);
  };

  const removeElement = (index) => {
    setArr((prevArr) => prevArr.filter((_, i) => i !== index));
  };


  // Pagination
  
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;
  let pages2 = [];

  const slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);

  useE(() => {
    if (query) {
      setCurrentPage2(1);
    }
  }, [query]);

  for (let i = 1; i <= Math.ceil(TotolData?.length / postPerPage2); i++) {
    pages2.push(i);
  }

  function Next() {
    setCurrentPage2(currentPage2 + 1);
  }

  function Prev() {
    if (currentPage2 !== 1) {
      setCurrentPage2(currentPage2 - 1);
    }
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

          <div
            className="two Special"
            onClick={() => {
              MakeArray(1);
            }}
          >
            <i
              className="fa-solid fa-circle-plus"
              style={{ cursor: "pointer" }}
            ></i>
            <p style={{ cursor: "pointer" }}>Care element </p>
          </div>

          {arr.map((i, index) => (
            <>
              <div
                className="two Special"
                style={{
                  textAlign: "center",
                  maxWidth: "100%",
                  marginTop: "5%",
                }}
              >
                <p>
                  Care element {index + 1}{" "}
                  <i
                    className="fa-solid fa-xmark pt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => removeElement(index)}
                  ></i>{" "}
                </p>
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
                className="CenterButton mt-2"
                onClick={() => ImageHandler()}
              >
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  accept="image/png, image/jpeg , video , pdf/*"
                />
                <i className="fa-solid fa-upload"></i> Upload
              </button>
            </>
          ))}
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
