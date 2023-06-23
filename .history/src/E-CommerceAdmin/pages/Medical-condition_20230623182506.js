/** @format */
import HOC from "../layout/HOC";
import { FiFilter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MedicalCondition = () => {
  const buttonData = ["Obgy", "Ortho", "Medicine", "Surgery"];
  const buttonData2 = ["BP", "Sugar", "Medicine", "Surgery"];
  const navigate = useNavigate();

  const [arr, setArr] = useState([]);

  const MakeArray = (element) => {
    setArr((curr) =>[ ...curr, element]);
  };

  return (
    <>
      <div className="Heading-Container">
        <p>Medical Condition</p>

        <div className="two-sec-container">
          <button className="btn-1">
            <FiFilter className="text-xl" />
            Filter
          </button>
          <p
            className="underline-text"
            onClick={() => navigate("/medical-condition-all")}
          >
            View All
          </p>
        </div>
      </div>

      <div className="New-Add-Section">
        <div className="last-icons">
          <i class="fa-regular fa-trash-can"></i>
          <i class="fa-solid fa-pen"></i>
        </div>

        <div className="Form-Section">
          <form>
            <div className="two-input-sec">
              <div className="left-div">
                <p>Name</p>
              </div>
              <input type={"text"} placeholder="Hernia" />
            </div>

            <div className="two-input-sec">
              <div className="left-div">
                <p>Speciality</p>
              </div>
              <div className="four-sec-div">
                <div className="buttons">
                  {buttonData.map((i, index) => (
                    <button type="button" key={index}>
                      {i}
                    </button>
                  ))}
                </div>
                <p>Add New +</p>
              </div>
            </div>

            <div className="two-input-sec">
              <div className="left-div">
                <p>Patient Profile</p>
              </div>
              <div className="four-sec-div">
                <div className="buttons">
                  {buttonData2.map((i, index) => (
                    <button type="button" key={index}>
                      {i}
                    </button>
                  ))}
                </div>
                <p>Add New +</p>
              </div>
            </div>
          </form>
        </div>

        <div className="last-icons">
          <button>Save</button>
        </div>
      </div>

      <div className="center-btn">
        <i
          class="fa-solid fa-plus"
          onClick={() => {
            MakeArray(1);
            console.log(arr);
          }}
        ></i>
        <p>ADD MORE </p>
      </div>
    </>
  );
};

export default HOC(MedicalCondition);
