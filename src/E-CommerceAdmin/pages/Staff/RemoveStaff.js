/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

const RemoveStaff = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const navigate = useNavigate();
  const AddSpeciality = async () => {
    Store.addNotification({
      title: "Success",
      message: "Staff Removed  ",
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
    navigate("/all-staff");
  };

  return (
    <>
      <div className="Remove_Staff_Three_Sec">
        {data.map((i, index) => (
          <div className="Main_Item" key={index}>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
            <p className="head">Rahul Sharma</p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempo
            </p>
            <button  onClick={() => AddSpeciality()}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HOC(RemoveStaff);
