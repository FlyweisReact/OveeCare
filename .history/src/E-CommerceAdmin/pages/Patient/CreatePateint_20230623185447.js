import React from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";
import HOC from '../../layout/HOC'

const CreatePateint = () => {
    const navigate = useNavigate()

    const AddHospital =() => {
      Store.addNotification({
        title: "Success",
        message: "New Speciality Created ",
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
        navigate('/patient')
    }

  return (
    <>
      <div className="add-hospital-head">
        <p className="head">Add Patient</p>
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




      <div className="two-new-buttons mt-5">
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