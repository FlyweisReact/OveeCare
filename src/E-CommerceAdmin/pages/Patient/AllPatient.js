/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

const AllPatient = () => {
  return (
    <>
      <div className="Heading-Container">
        <p>Manage Patient </p>
        <div className="two-sec-container">
          <button className="btn-1">
            <FiFilter className="text-xl" />
            Filter
          </button>
          <Link to='/create-patient'>
          <button className="btn-2">
          <i className="fa-solid fa-circle-plus text-xl"></i>
            Add New Patient
          </button>
        
          </Link>
          </div>
      </div>

      <table className="Fixed_Tabler">
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Patient Name</th>
            <th>D.O.B</th>
            <th>Assign Doctor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>#1</td>
            <td>30.03.2023</td>
            <td>8.00 pm</td>
            <td>GYE+ ECG</td>
            <td>Alen paul</td>
            <td>10.05.1999</td>
            <td>Marie Lang</td>
            <td className="Pending">Pending</td>
          </tr>
          <tr>
          <td>#2</td>
            <td>30.03.2023</td>
            <td>8.00 pm</td>
            <td>GYE+ ECG</td>
            <td>Alen paul</td>
            <td>10.05.1999</td>
            <td>Marie Lang</td>
            <td className="Complete_Success">Completed</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HOC(AllPatient);