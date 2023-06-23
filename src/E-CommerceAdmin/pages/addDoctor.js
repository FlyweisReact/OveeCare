/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";
import HOC from "../layout/HOC";

const Index = () => {
    const navigate = useNavigate()

    const AddHospital =() => {
      Store.addNotification({
        title: "Success",
        message: "New Doctor Created ",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1500,
          onScreen: true,
        },
      });
        navigate('/doctor')
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
            <p>Doctor Name</p>
            <input type={"text"} placeholder="Type Here" />
          </div>

          <div className="two-div">
            <p>Date of Birth</p>
            <input type={"date"} />
          </div>

          <div className="two-div">
            <p>Gender</p>
            <input type={"text"} />
          </div>

          <div className="two-div">
            <p>Phone Number</p>
            <input type={"tel"} pattern={"[0-9]{10}"} />
          </div>

          <div className="two-div">
            <p>Email</p>
            <input type={"email"} />
          </div>

          <div className="two-div">
            <p>Home Address</p>
            <input type={"text"} />
          </div>
        </div>
      </div>


      <div className="Text-Area">
        <p>Doctor BIO</p>
        <textarea placeholder="Type here" />
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

      <div className="add-hospital-head">
        <div>
          <p className="head">Medical Registration Number</p>
          <p className="text">
          2220202020012355
          </p>
        </div>
      </div>
      <div className="add-hospital-head">
        <div>
          <p className="head">Specialization</p>
          <p className="text" style={{width : '100%'}}>
          Cardiology, Neurology, Paediatrics, Gynaecologist
          </p>
        </div>
      </div>


      <div className="Text-Area">
        <p>Research</p>
        <textarea placeholder="Type here" />
      </div>

      <div className="add-hospital-head">
        <div>
          <p className="head">Awards</p>
          <p className="text" style={{width : '100%'}}>
          Times of India, The Hindu
          </p>
        </div>
      </div>


      <div className="add-hospital-head">
        <div>
          <p className="head">Doctor’s Schedule</p>
         <div className="two_Sec">
         <input type='date' id="first" />
         <input type='date' id="first" placeholder="Select Date" />
    
         </div>
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
