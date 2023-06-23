import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HOC from '../../layout/HOC'

const CreatePateint = () => {
    const navigate = useNavigate()

    const AddHospital =() => {
        toast.success("Hospital Added")
        navigate('/hospital')
    }

  return (
    <>
      <div className="add-hospital-head">
        <p className="head">Add Doctor</p>
      </div>

      <div className="add-hostpital-two-sec">
        <div className="left-div">
          <img
            src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
            alt=""
          />
          <button>
            <i className="fa-solid fa-upload"></i>
            Upload
          </button>
        </div>

        {/* Right Container  */}
        <div className="right-div">
          <div className="two-div">
            <p>Patient Name</p>
            <input type={"text"} placeholder="Type Here" />
          </div>

          <div className="two-div">
            <p>Date of Birth</p>
            <input type={"date"} />
          </div>

          <div className="two-div">
            <p>Age</p>
            <input type={"numbe"} min={0} />
          </div>

          <div className="two-div">
            <p>Gender</p>
            <input type={"text"} />
          </div>
        </div>
      </div>

      <div className="add-hospital-head">
        <p className="head">Contact Information</p>
      </div>

      <div className="add-hostpital-two-sec">
        <div className="right-div">
          <div className="two-div">
            <p>Phone Number</p>
            <input type={"number"}  />
          </div>

          <div className="two-div">
            <p>Email Address</p>
            <input type={"text"} />
          </div>

          <div className="two-div">
            <p>Home Address</p>
            <input type={"text"} />
          </div>
        </div>
      </div>

      <div className="add-hospital-head">
        <p className="head">Family Details</p>
      </div>
      <div className="add-hostpital-two-sec">
        <div className="right-div">
          <div className="two-div">
            <p>Name</p>
            <input type={"text"}  />
          </div>
          <div className="two-div">
            <p>Relation</p>
            <input type={"text"}  />
          </div>
          <div className="two-div">
            <p>Phone Number</p>
            <input type={"number"}  />
          </div>

        
        </div>
      </div>
      <div className="add-hospital-head">
        <p className="head">Emergency Contact information</p>
      </div>
      <div className="add-hostpital-two-sec">
        <div className="right-div">
          <div className="two-div">
            <p>Name</p>
            <input type={"text"}  />
          </div>
          <div className="two-div">
            <p>Contact Number</p>
            <input type={"text"}  />
          </div>  
        </div>
      </div>

   


      <div className="add-hospital-head">
        <div>
          <p className="head">Medical Services offered</p>
          <p className="text">
            Out Patient Services, In Patient Services, Emergency Care,
            Laboratory Services, Radiology Services
          </p>
        </div>
      </div>

      <div className="add-hospital-head">
        <div>
          <p className="head">Certificate</p>
        </div>
      </div>

      <div className="add-hostpital-two-sec" style={{ margin: "0" }}>
        <div className="left-div" style={{ margin: "0" }}>
          <button>
            <i className="fa-solid fa-upload"></i>
            Upload
          </button>
        </div>
      </div>

      <div className="two-new-buttons">
        <button style={{ color: "#7D0011" }}>Cancel</button>
        <button style={{ backgroundColor: "#7D0011", color: "#fff" }}
        onClick={() => AddHospital()}
        >
          Add
        </button>
      </div>
    </>
  );
};


export default HOC(CreatePateint)