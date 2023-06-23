/** @format */

import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../Images/logo2.png";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = [
    {
      icon: <MdDashboardCustomize className="text-3xl" />,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <i className="fa-solid fa-envelope text-2xl"></i>,
      name: "Speciality",
      link: "/Speciality",
    },
    {
      icon: (
        <i className="fa-sharp fa-solid fa-hand-holding-heart text-2xl"></i>
      ),
      name: "Care Element",
      link : '/care-element'
    },
    {
      icon: <i className="fa-solid fa-notes-medical text-2xl"></i>,
      name: "Medical Condition",
      link : '/medical-condition'
    },
    {
      icon: <i className="fa-solid fa-newspaper text-2xl"></i>,
      name: "Templates",
      link : "/templates"
    },
    {
      icon: <i className="fa-solid fa-hospital text-2xl"></i>,
      name: "Hospital",
      link : '/hospital'
    },

    {
      icon: <i className="fa-solid fa-user-doctor text-2xl"></i>,
      name: "Doctor",
      link : '/doctor'
    },

    {
      icon: <i className="fa-solid fa-hospital-user text-2xl"></i>,
      name: "Patient",
      link : '/patient'
    },

    {
      icon: <i className="fa-solid fa-users text-2xl"></i>,
      name: "Staff",
      link : '/all-staff'
    },
    {
      icon: <i className="fa-solid fa-calendar-days text-2xl"></i>,
      name: "Schedule",
      link : '/schedule'
    },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="Logo-Cont">
          <img src={logo} alt="" />
        </div>

        {data.map((i, index) => (
          <div
            className={
              i.link === location.pathname ? "items activeItems" : "items"
            }
            key={index}
            onClick={() => navigate(i.link)}
          >
            {i.icon}
            <p>{i.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
