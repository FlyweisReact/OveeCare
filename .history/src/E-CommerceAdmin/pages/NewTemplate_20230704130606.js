/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HOC from "../layout/HOC";

const NewTemplate = () => {
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

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

  const DataArray = (element) => {
    setData((curr) => [...curr, element]);
  };

  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;
  let pages2 = [];
  const slicedData = data.slice(firstPostIndex2, lastPostIndex2);
  for (let i = 1; i <= Math.ceil(data?.length / postPerPage2); i++) {
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
          onClick={() => {
            MakeArray(1);
          }}
        ></i>
        <button
          onClick={() => {
            MakeArray(1);
          }}
        >
          Add New Push Message
        </button>
      </div>

        {slicedData?.map((i ,index) => (

        ))}

   

      <div className="pagination">
        <button onClick={() => Prev()} className="prevBtn">
          <i className="fa-solid fa-backward"></i>
        </button>
        {currentPage2 === 1 ? (
          ""
        ) : (
          <button onClick={() => setCurrentPage2(1)}>1</button>
        )}

        {pages2?.slice(currentPage2 - 1, currentPage2 + 3).map((i, index) =>
          i === pages2?.length ? (
            ""
          ) : (
            <button
              key={index}
              onClick={() => setCurrentPage2(i)}
              className={currentPage2 === i ? "activePage" : ""}
            >
              {" "}
              {i}{" "}
            </button>
          )
        )}

        <button
          onClick={() => setCurrentPage2(pages2?.length)}
          className={currentPage2 === pages2?.length ? "activePage" : ""}
        >
          {" "}
          {pages2?.length}{" "}
        </button>

        {currentPage2 === pages2?.length ? (
          ""
        ) : (
          <button onClick={() => Next()} className="nextBtn">
            {" "}
            <i className="fa-sharp fa-solid fa-forward"></i>
          </button>
        )}
      </div>

      <div className="Template_Form">
        <div className="SaveBtn">
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default HOC(NewTemplate);
