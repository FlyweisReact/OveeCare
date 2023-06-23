/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Index = () => {
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
            src="https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg"
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
            <p>Hospital Name</p>
            <input type={"text"} placeholder="Type Here" />
          </div>

          <div className="two-div">
            <p>Location</p>
            <input type={"text"} />
          </div>

          <div className="two-div">
            <p>Address</p>
            <input type={"text"} />
          </div>

          <div className="two-div">
            <p>Country</p>
            <input type={"text"} />
          </div>

          <div className="two-div">
            <p>State</p>
            <input type={"text"} />
          </div>

          <div className="two-div">
            <p>City</p>
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
            <input type={"text"} placeholder="Type Here" />
          </div>

          <div className="two-div">
            <p>Fax Number</p>
            <input type={"text"} />
          </div>

          <div className="two-div">
            <p>Email Address</p>
            <input type={"text"} />
          </div>

          <div className="two-div">
            <p>Website</p>
            <input type={"text"} />
          </div>

          <div className="two-div">
            <p>Location</p>
            <input type={"text"} />
          </div>
        </div>
      </div>

      <div className="add-hospital-head">
        <p className="head">Specialities</p>
      </div>

      <div className="add-hostpital-two-sec">
        <div className="right-div">
          <div className="two-div">
            <p>Number of Beds</p>
            <input type={"text"} placeholder="Type Here" />
          </div>
        </div>
      </div>

      <div className="add-hospital-head">
        <p className="head">Director of Hospital</p>
      </div>

      <div className="add-hostpital-two-sec">
        <div className="left-div">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
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
            <p> Name</p>
            <input type={"text"} placeholder="Type Here" />
          </div>

          <div className="two-div">
            <p>Contact Number</p>
            <input type={"text"} />
          </div>
        </div>
      </div>

      <div className="add-hospital-head">
        <p className="head">Insurance & Billing Details</p>
      </div>

      <div className="add-hostpital-two-sec">
        {/* Right Container  */}
        <div className="right-div">
          <div className="two-div">
            <p> Insurance</p>
            <input type={"text"} placeholder="Type Here" />
          </div>

          <div className="two-div">
            <p>Billing Process</p>
            <input type={"text"} />
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

export default HOC(Index);
