/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { FiFilter } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

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
          <button className="btn-2">
            <AiOutlinePlus className="text-xl" />
            Add New Patient
          </button>
        </div>
      </div>


        <table className="Fixed_Tabler">
            <thead>
                <tr>
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
                    <td>30.03.2023</td>
                    <td>8.00 pm</td>
                    <td>GYE+ ECG</td>
                    <td>Alen paul</td>
                    <td>10.05.1999</td>
                    <td>Marie Lang</td>
                    <td className="Pending">Pending</td>
                </tr>
                <tr>
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
