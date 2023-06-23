/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const AddSpeciality = async () => {
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
    navigate('/')
  };

  return (
    <>
      <div className="Center_Banner_Image">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>

      <form className="Center_Form">
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <select>
            <option>Type</option>
            <option></option>
          </select>
          <input type="text" placeholder="Add ID NO" />
        </div>
        <div>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Contact" />
        </div>
        <div>
          <select>
            <option>Add Department</option>
            <option></option>
          </select>
          <input type="text" placeholder="Location" />
        </div>

        <button
          className="CenterButton mt-4"
          style={{ width: "250px", fontSize: "20px", marginTop: "20px" }}
        >
          Save Information
        </button>
      </form>
    </>
  );
};

export default HOC(Index);
